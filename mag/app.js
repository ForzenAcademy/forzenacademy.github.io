window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
window.gtag = gtag;

gtag('js', new Date());
gtag('config', 'G-EW36ZR1BPV');

// Set the mobile class ASAP to avoid a flash of wrong layout
(function () {
  const hasTouch =
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
    'ontouchstart' in window ||
    window.matchMedia('(pointer: coarse)').matches;

  if (hasTouch) document.documentElement.classList.add('is-mobile');
})();

window.ANALYTICS_BRIDGE = {
  build: null,
  event(name, params) {
    const p = params ? { ...params } : {};
    if (this.build != null && this.build !== '') {
      p.build = this.build;
    }
    gtag('event', name, p);
  },
};

window.PREFERENCES_BRIDGE = (() => {
  const memory = new Map();

  const DEFAULT_COOKIE_DAYS = 400;
  const PREFIX = 'pref_';

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

  function writeCookie(key, type, value) {
    const expires = new Date(Date.now() + DEFAULT_COOKIE_DAYS * 24 * 60 * 60 * 1000);
    const name = cookieName(key);
    const encoded = encodeValue(type, value);

    try {
      document.cookie =
        `${name}=${encoded}; ` + `expires=${expires.toUTCString()}; ` + `path=/; ` + `SameSite=Lax`;

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

  function primeMemoryFromCookies() {
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

      memory.set(key, decoded.v);
    }
  }

  function setValue(key, type, value) {
    memory.set(key, value);
    const persisted = writeCookie(key, type, value);
    return persisted;
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

    const cookieValue = readCookieTyped(key, expectedType, undefined);
    if (cookieValue !== undefined) {
      memory.set(key, cookieValue);
      return cookieValue;
    }

    return defaultValue;
  }

  primeMemoryFromCookies();

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
      removeCookie(key);
    },

    clear() {
      const keys = Array.from(memory.keys());
      memory.clear();
      for (const key of keys) {
        removeCookie(key);
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

function resizeGameCanvas() {
  const canvas = document.getElementById('canvas');
  const shell = document.getElementById('canvas-shell');
  if (!canvas || !shell) return;

  const baseW = 240;
  const baseH = 160;
  const aspect = baseW / baseH;

  const vv = window.visualViewport;
  const vw = (vv ? vv.width : window.innerWidth) || window.innerWidth;
  const vh = (vv ? vv.height : window.innerHeight) || window.innerHeight;

  let h = vh;
  let w = h * aspect;

  if (w > vw) {
    w = vw;
    h = w / aspect;
  }

  const cssW = Math.floor(w);
  const cssH = Math.floor(h);

  canvas.style.width = `${cssW}px`;
  canvas.style.height = `${cssH}px`;

  shell.style.width = `${cssW}px`;
  shell.style.height = `${cssH}px`;
}

function onViewportChange() {
  resizeGameCanvas();
}

window.addEventListener('load', onViewportChange, { passive: true });
window.addEventListener('resize', onViewportChange, { passive: true });
window.addEventListener('orientationchange', () => setTimeout(onViewportChange, 250), {
  passive: true,
});

if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', onViewportChange, { passive: true });
}

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
    onViewportChange();
    focusGameCanvas();
    requestAnimationFrame(() => focusGameCanvas());
  },
  { passive: true },
);
