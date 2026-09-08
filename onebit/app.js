const FORZEN_GOOGLE_ANALYTICS_ID = 'G-EW36ZR1BPV';

function normalizeGoogleAnalyticsId(value) {
  if (typeof value !== 'string') return null;

  const normalizedValue = value.trim().toUpperCase();
  return /^G-[A-Z0-9]+$/.test(normalizedValue) ? normalizedValue : null;
}

function ensureGoogleAnalytics(measurementId) {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  if (!window.__FORZEN_GTAG_BOOTSTRAPPED__) {
    window.gtag('js', new Date());
    window.__FORZEN_GTAG_BOOTSTRAPPED__ = true;
  }

  window.__FORZEN_CONFIGURED_GOOGLE_ANALYTICS_IDS__ =
    window.__FORZEN_CONFIGURED_GOOGLE_ANALYTICS_IDS__ || {};
  if (!window.__FORZEN_CONFIGURED_GOOGLE_ANALYTICS_IDS__[measurementId]) {
    window.gtag('config', measurementId);
    window.__FORZEN_CONFIGURED_GOOGLE_ANALYTICS_IDS__[measurementId] = true;
  }

  if (!document.querySelector(`script[data-forzen-google-analytics="${measurementId}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.setAttribute('data-forzen-google-analytics', measurementId);
    document.head.appendChild(script);
  }
}

function createAnalyticsBridge() {
  const MAX_STORED_EVENTS = 25;
  let analyticsState = {
    recentEvents: [],
    userId: null,
    userProperties: {},
  };

  const asObject = (value) =>
    value && typeof value === 'object' && !Array.isArray(value) ? { ...value } : {};
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const trimOrNull = (value) => {
    const text = value == null ? '' : String(value).trim();
    return text.length > 0 ? text : null;
  };
  const recordEvent = (entry) => {
    analyticsState.recentEvents = [...analyticsState.recentEvents, entry].slice(-MAX_STORED_EVENTS);
  };
  const syncUserContext = () => {
    window.gtag('set', { user_id: analyticsState.userId ?? undefined });
    window.gtag('set', 'user_properties', { ...analyticsState.userProperties });
  };

  const bridge = {
    build: null,
    event(name, properties = {}) {
      return bridge.track(name, properties);
    },
    track(name, properties = {}) {
      const sanitizedName = trimOrNull(name);
      if (!sanitizedName) {
        return false;
      }

      const payload = asObject(properties);
      const build = trimOrNull(bridge.build);
      if (build) {
        payload.build = build;
      }
      recordEvent({
        event: sanitizedName,
        properties: payload,
        timestampMs: Date.now(),
        type: 'track',
      });
      window.gtag('event', sanitizedName, payload);
      return true;
    },
    screen(screenName, properties = {}) {
      const sanitizedName = trimOrNull(screenName);
      if (!sanitizedName) {
        return false;
      }

      const payload = asObject(properties);
      const build = trimOrNull(bridge.build);
      if (build) {
        payload.build = build;
      }
      recordEvent({
        properties: payload,
        screen: sanitizedName,
        timestampMs: Date.now(),
        type: 'screen',
      });
      window.gtag('event', 'screen_view', {
        screen_name: sanitizedName,
        ...payload,
      });
      return true;
    },
    setUserId(userId) {
      analyticsState.userId = trimOrNull(userId);
      syncUserContext();
      return true;
    },
    setUserProperty(key, value) {
      const sanitizedKey = trimOrNull(key);
      if (!sanitizedKey) {
        return false;
      }

      analyticsState.userProperties[sanitizedKey] = value == null ? '' : String(value);
      syncUserContext();
      return true;
    },
    reset() {
      analyticsState = {
        recentEvents: [],
        userId: null,
        userProperties: {},
      };
      syncUserContext();
      return true;
    },
    snapshot() {
      return clone(analyticsState);
    },
  };

  return bridge;
}

const configuredGoogleAnalyticsId = normalizeGoogleAnalyticsId(FORZEN_GOOGLE_ANALYTICS_ID);
if (!window.ANALYTICS_BRIDGE && configuredGoogleAnalyticsId) {
  ensureGoogleAnalytics(configuredGoogleAnalyticsId);
  window.ANALYTICS_BRIDGE = createAnalyticsBridge();
}

// Set the mobile class ASAP to avoid a flash of wrong layout
(function () {
  const hasTouch =
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    'ontouchstart' in window ||
    window.matchMedia('(pointer: coarse)').matches;

  if (hasTouch) document.documentElement.classList.add('is-mobile');
})();

if (!window.LANGUAGE_BRIDGE) {
  window.LANGUAGE_BRIDGE = (() => {
    const DEFAULT_LANGUAGE = 'en';
    const listeners = new Set();

    function parseLanguageTag(value) {
      if (typeof value !== 'string') return null;

      const cleaned = value.trim().split('.')[0].split('@')[0].replace(/_/g, '-');
      if (!cleaned) return null;

      const parts = cleaned.split('-').filter(Boolean);
      const language = parts[0] ? parts[0].toLowerCase() : '';
      if (!/^[a-z]{2,3}$/.test(language) || language === 'und') return null;

      const normalized = [language];
      for (const part of parts.slice(1)) {
        if (!/^[a-z0-9]{2,8}$/i.test(part)) continue;

        if (/^[a-z]{4}$/i.test(part)) {
          normalized.push(part[0].toUpperCase() + part.slice(1).toLowerCase());
        } else if (/^[a-z]{2}$/i.test(part) || /^[0-9]{3}$/.test(part)) {
          normalized.push(part.toUpperCase());
        } else {
          normalized.push(part.toLowerCase());
        }
      }

      return normalized.join('-');
    }

    function normalizeLanguageList(values) {
      const out = [];
      const seen = new Set();
      for (const value of values || []) {
        const tag = parseLanguageTag(value);
        if (!tag) continue;

        const key = tag.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        out.push(tag);
      }
      return out.length > 0 ? out : [DEFAULT_LANGUAGE];
    }

    function readBrowserLanguages() {
      const languages = Array.isArray(navigator.languages) ? navigator.languages : [];
      return normalizeLanguageList([...languages, navigator.language, navigator.userLanguage]);
    }

    let languages = readBrowserLanguages();

    function getLanguage() {
      return languages[0] || DEFAULT_LANGUAGE;
    }

    function getLanguages() {
      return [...languages];
    }

    function setLanguages(values) {
      languages = normalizeLanguageList(values);
      for (const listener of listeners) {
        listener(getLanguage(), getLanguages());
      }
    }

    window.addEventListener('languagechange', () => {
      setLanguages(readBrowserLanguages());
    });

    return {
      getLanguage,
      getLanguages,
      setLanguage(language) {
        setLanguages([language]);
      },
      setLanguages,
      onChanged(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
    };
  })();
}

(() => {
  const invoke = window.__TAURI__?.core?.invoke;
  if (typeof invoke !== 'function' || !window.LANGUAGE_BRIDGE?.setLanguages) return;

  invoke('bridge_invoke', {
    request: {
      bridge: 'LANGUAGE_BRIDGE',
      method: 'snapshot',
      payload: { _suppressEvent: true },
    },
  })
    .then((response) => {
      if (!response?.ok) return;
      if (response.data?.native === false) return;
      const languages = Array.isArray(response.data?.languages)
        ? response.data.languages
        : response.data?.language
        ? [response.data.language]
        : [];
      if (languages.length > 0) window.LANGUAGE_BRIDGE.setLanguages(languages);
    })
    .catch(() => {
      /* Browser or unsupported Tauri shell; keep the navigator fallback. */
    });
})();

if (!window.PREFERENCES_BRIDGE) {
  window.PREFERENCES_BRIDGE = (() => {
    const memory = new Map();

    const DEFAULT_COOKIE_DAYS = 400;
    const PREFIX = 'pref_';
    const LOCAL_STORAGE_PREFIX = 'forzen.pref.';

    function storageKey(key) {
      return LOCAL_STORAGE_PREFIX + encodeURIComponent(key);
    }

    function canUseLocalStorage() {
      try {
        const probeKey = `${LOCAL_STORAGE_PREFIX}__probe__`;
        window.localStorage.setItem(probeKey, '1');
        window.localStorage.removeItem(probeKey);
        return true;
      } catch {
        return false;
      }
    }

    function cookieName(key) {
      return PREFIX + encodeURIComponent(key);
    }

    function encodeValue(type, value) {
      return encodeURIComponent(JSON.stringify({ t: type, v: value }));
    }

    function decodeValue(raw) {
      if (!raw) return null;
      try {
        const parsed = JSON.parse(decodeURIComponent(raw));
        if (!parsed || typeof parsed.t !== 'string') return null;
        return parsed;
      } catch {
        return null;
      }
    }

    function writeLocalStorage(key, type, value) {
      if (!canUseLocalStorage()) return false;

      try {
        window.localStorage.setItem(storageKey(key), JSON.stringify({ t: type, v: value }));
        return readLocalStorageTyped(key, type, undefined) === value;
      } catch {
        return false;
      }
    }

    function readLocalStorageRaw(key) {
      if (!canUseLocalStorage()) return null;

      try {
        return window.localStorage.getItem(storageKey(key));
      } catch {
        return null;
      }
    }

    function readLocalStorageTyped(key, expectedType, defaultValue) {
      const raw = readLocalStorageRaw(key);
      const decoded = decodeValue(raw);
      if (!decoded || decoded.t !== expectedType) return defaultValue;
      return decoded.v;
    }

    function removeLocalStorage(key) {
      if (!canUseLocalStorage()) return;

      try {
        window.localStorage.removeItem(storageKey(key));
      } catch {
        /* Silent */
      }
    }

    function writeCookie(key, type, value) {
      const expires = new Date(Date.now() + DEFAULT_COOKIE_DAYS * 24 * 60 * 60 * 1000);
      const name = cookieName(key);
      const encoded = encodeValue(type, value);

      try {
        document.cookie =
          `${name}=${encoded}; ` +
          `expires=${expires.toUTCString()}; ` +
          `path=/; ` +
          `SameSite=Lax`;

        return readCookieTyped(key, type, undefined) === value;
      } catch {
        return false;
      }
    }

    function readCookieRaw(key) {
      const name = cookieName(key) + '=';
      const parts = document.cookie ? document.cookie.split('; ') : [];
      for (const part of parts) {
        if (part.startsWith(name)) {
          return part.substring(name.length);
        }
      }
      return null;
    }

    function readCookieTyped(key, expectedType, defaultValue) {
      const raw = readCookieRaw(key);
      const decoded = decodeValue(raw);
      if (!decoded || decoded.t !== expectedType) return defaultValue;
      return decoded.v;
    }

    function removeCookie(key) {
      const name = cookieName(key);
      try {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
      } catch {
        /* Silent */
      }
    }

    function primeMemoryFromPersistentStorage() {
      if (canUseLocalStorage()) {
        try {
          for (let index = 0; index < window.localStorage.length; index += 1) {
            const rawName = window.localStorage.key(index);
            if (!rawName || !rawName.startsWith(LOCAL_STORAGE_PREFIX)) continue;

            const key = decodeURIComponent(rawName.substring(LOCAL_STORAGE_PREFIX.length));
            const decoded = decodeValue(window.localStorage.getItem(rawName));
            if (!decoded) continue;

            memory.set(key, decoded.v);
          }
        } catch {
          /* Silent */
        }
      }

      const parts = document.cookie ? document.cookie.split('; ') : [];
      for (const part of parts) {
        const eq = part.indexOf('=');
        if (eq <= 0) continue;

        const rawName = part.substring(0, eq);
        const rawValue = part.substring(eq + 1);

        if (!rawName.startsWith(PREFIX)) continue;

        const key = decodeURIComponent(rawName.substring(PREFIX.length));
        const decoded = decodeValue(rawValue);
        if (!decoded) continue;

        if (!memory.has(key)) {
          memory.set(key, decoded.v);
        }
        void writeLocalStorage(key, decoded.t, decoded.v);
      }
    }

    function setValue(key, type, value) {
      memory.set(key, value);
      const persistedInLocalStorage = writeLocalStorage(key, type, value);
      if (persistedInLocalStorage) {
        removeCookie(key);
        return true;
      }

      return writeCookie(key, type, value);
    }

    function getValue(key, expectedType, defaultValue) {
      const mem = memory.get(key);
      if (
        (expectedType === 'boolean' && typeof mem === 'boolean') ||
        (expectedType === 'string' && typeof mem === 'string') ||
        (expectedType === 'number' && typeof mem === 'number')
      ) {
        return mem;
      }

      const localStorageValue = readLocalStorageTyped(key, expectedType, undefined);
      if (localStorageValue !== undefined) {
        memory.set(key, localStorageValue);
        return localStorageValue;
      }

      const cookieValue = readCookieTyped(key, expectedType, undefined);
      if (cookieValue !== undefined) {
        memory.set(key, cookieValue);
        void writeLocalStorage(key, expectedType, cookieValue);
        return cookieValue;
      }

      return defaultValue;
    }

    primeMemoryFromPersistentStorage();

    return {
      setBoolean(key, value) {
        setValue(key, 'boolean', !!value);
      },

      getBoolean(key, defaultValue = false) {
        return getValue(key, 'boolean', !!defaultValue);
      },

      setString(key, value) {
        setValue(key, 'string', String(value));
      },

      getString(key, defaultValue = '') {
        return getValue(key, 'string', String(defaultValue));
      },

      setNumber(key, value) {
        const n = Number(value);
        setValue(key, 'number', Number.isFinite(n) ? n : 0);
      },

      getNumber(key, defaultValue = 0) {
        const n = Number(defaultValue);
        return getValue(key, 'number', Number.isFinite(n) ? n : 0);
      },

      remove(key) {
        memory.delete(key);
        removeLocalStorage(key);
        removeCookie(key);
      },

      clear() {
        const keys = Array.from(memory.keys());
        memory.clear();
        for (const key of keys) {
          removeLocalStorage(key);
          removeCookie(key);
        }

        if (canUseLocalStorage()) {
          try {
            const keysToDelete = [];
            for (let index = 0; index < window.localStorage.length; index += 1) {
              const rawName = window.localStorage.key(index);
              if (rawName && rawName.startsWith(LOCAL_STORAGE_PREFIX)) {
                keysToDelete.push(rawName);
              }
            }
            for (const rawName of keysToDelete) {
              window.localStorage.removeItem(rawName);
            }
          } catch {
            /* Silent */
          }
        }

        const parts = document.cookie ? document.cookie.split('; ') : [];
        for (const part of parts) {
          const eq = part.indexOf('=');
          if (eq <= 0) continue;

          const rawName = part.substring(0, eq);
          if (!rawName.startsWith(PREFIX)) continue;

          try {
            const decodedKey = decodeURIComponent(rawName.substring(PREFIX.length));
            removeCookie(decodedKey);
          } catch {
            /* Silent */
          }
        }
      },
    };
  })();
}

window.HAPTICS_BRIDGE = (() => {
  function isInIframe() {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  }

  function hasUserActivation() {
    try {
      return !!navigator.userActivation?.hasBeenActive;
    } catch {
      return false;
    }
  }

  function canVibrateBrowser() {
    if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') {
      return false;
    }

    if (isInIframe() && !hasUserActivation()) {
      return false;
    }

    return true;
  }

  function vibrateBrowser(pattern) {
    if (!canVibrateBrowser()) return false;

    try {
      return navigator.vibrate(pattern);
    } catch {
      return false;
    }
  }

  function getConnectedGamepads() {
    try {
      if (typeof navigator === 'undefined' || typeof navigator.getGamepads !== 'function') {
        return [];
      }

      const pads = navigator.getGamepads();
      if (!pads) return [];

      const out = [];
      for (let i = 0; i < pads.length; i++) {
        const pad = pads[i];
        if (pad && pad.connected) out.push(pad);
      }
      return out;
    } catch {
      return [];
    }
  }

  function getActuator(gamepad) {
    if (!gamepad) return null;

    if (gamepad.vibrationActuator && typeof gamepad.vibrationActuator.playEffect === 'function') {
      return gamepad.vibrationActuator;
    }

    if (Array.isArray(gamepad.hapticActuators) && gamepad.hapticActuators.length > 0) {
      const a = gamepad.hapticActuators[0];
      if (a && typeof a.playEffect === 'function') return a;
      if (a && typeof a.pulse === 'function') return a;
    }

    return null;
  }

  function pulseGamepad(duration, weakMagnitude = 1, strongMagnitude = weakMagnitude) {
    const pads = getConnectedGamepads();
    if (pads.length === 0) return false;

    let any = false;

    for (const pad of pads) {
      const actuator = getActuator(pad);
      if (!actuator) continue;

      try {
        if (typeof actuator.playEffect === 'function') {
          actuator.playEffect('dual-rumble', {
            startDelay: 0,
            duration: Math.max(1, duration | 0),
            weakMagnitude: Math.max(0, Math.min(1, weakMagnitude)),
            strongMagnitude: Math.max(0, Math.min(1, strongMagnitude)),
          });
          any = true;
          continue;
        }

        if (typeof actuator.pulse === 'function') {
          actuator.pulse(Math.max(weakMagnitude, strongMagnitude), Math.max(1, duration | 0));
          any = true;
        }
      } catch {
        // ignore unsupported actuator errors
      }
    }

    return any;
  }

  function playHaptics({ browserPattern, gamepadBursts }) {
    let didAnything = false;

    if (browserPattern != null) {
      didAnything = vibrateBrowser(browserPattern) || didAnything;
    }

    if (Array.isArray(gamepadBursts)) {
      let delay = 0;

      for (const burst of gamepadBursts) {
        const { duration = 20, weak = 1, strong = weak, gapAfter = 0 } = burst ?? {};

        if (delay <= 0) {
          didAnything = pulseGamepad(duration, weak, strong) || didAnything;
        } else {
          setTimeout(() => {
            pulseGamepad(duration, weak, strong);
          }, delay);
        }

        delay += Math.max(0, duration | 0) + Math.max(0, gapAfter | 0);
      }
    }

    return didAnything;
  }

  return {
    selection() {
      playHaptics({
        browserPattern: 7,
        gamepadBursts: [{ duration: 24, weak: 0.2, strong: 0.1 }],
      });
    },

    impact(style) {
      switch (style) {
        case 'light':
          playHaptics({
            browserPattern: 4,
            gamepadBursts: [{ duration: 20, weak: 0.2, strong: 0.15 }],
          });
          break;
        case 'medium':
          playHaptics({
            browserPattern: 24,
            gamepadBursts: [{ duration: 40, weak: 0.45, strong: 0.35 }],
          });
          break;
        case 'strong':
          playHaptics({
            browserPattern: [36, 12, 36],
            gamepadBursts: [
              { duration: 36, weak: 0.8, strong: 0.7, gapAfter: 12 },
              { duration: 36, weak: 0.8, strong: 0.7 },
            ],
          });
          break;
        default:
          playHaptics({
            browserPattern: 12,
            gamepadBursts: [{ duration: 28, weak: 0.35, strong: 0.25 }],
          });
          break;
      }
    },

    notify(type) {
      switch (type) {
        case 'success':
          playHaptics({
            browserPattern: [18, 24, 36],
            gamepadBursts: [
              { duration: 18, weak: 0.25, strong: 0.15, gapAfter: 24 },
              { duration: 36, weak: 0.6, strong: 0.45 },
            ],
          });
          break;
        case 'warning':
          playHaptics({
            browserPattern: [30, 20, 30],
            gamepadBursts: [
              { duration: 30, weak: 0.5, strong: 0.35, gapAfter: 20 },
              { duration: 30, weak: 0.5, strong: 0.35 },
            ],
          });
          break;
        case 'error':
          playHaptics({
            browserPattern: [50, 20, 50, 20, 50],
            gamepadBursts: [
              { duration: 50, weak: 1, strong: 0.9, gapAfter: 20 },
              { duration: 50, weak: 1, strong: 0.9, gapAfter: 20 },
              { duration: 50, weak: 1, strong: 0.9 },
            ],
          });
          break;
        default:
          playHaptics({
            browserPattern: 20,
            gamepadBursts: [{ duration: 30, weak: 0.4, strong: 0.3 }],
          });
          break;
      }
    },
  };
})();

(function () {
  const isTouchDevice =
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    'ontouchstart' in window ||
    window.matchMedia('(pointer: coarse)').matches;

  if (!isTouchDevice) return;

  const stop = (e) => {
    e.preventDefault();
  };

  // Kill pinch zoom / two-finger pan everywhere.
  document.addEventListener(
    'touchstart',
    (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    },
    { passive: false },
  );

  document.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
        return;
      }

      // Prevent page panning even for single-touch drags.
      e.preventDefault();
    },
    { passive: false },
  );

  // iOS gesture events
  document.addEventListener('gesturestart', stop, { passive: false });
  document.addEventListener('gesturechange', stop, { passive: false });
  document.addEventListener('gestureend', stop, { passive: false });

  // Prevent double-tap zoom
  let lastTouchEnd = 0;
  document.addEventListener(
    'touchend',
    (e) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    },
    { passive: false },
  );
})();

function focusGameCanvas() {
  const canvas = document.getElementById('canvas');
  if (!canvas) return;

  try {
    canvas.focus({ preventScroll: true });
  } catch {
    canvas.focus();
  }
}

window.addEventListener(
  'load',
  () => {
    focusGameCanvas();
    requestAnimationFrame(() => focusGameCanvas());
  },
  { passive: true },
);
