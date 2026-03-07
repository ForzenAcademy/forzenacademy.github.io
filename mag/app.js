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

  function canVibrate() {
    if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') {
      return false;
    }

    // Only gate when embedded. Normal top-level pages should work as before.
    if (isInIframe() && !hasUserActivation()) {
      return false;
    }

    return true;
  }

  function vibrate(pattern) {
    if (!canVibrate()) return false;

    try {
      return navigator.vibrate(pattern);
    } catch {
      return false;
    }
  }

  return {
    selection() {
      vibrate(7);
    },

    impact(style) {
      switch (style) {
        case 'light':
          vibrate(12);
          break;
        case 'medium':
          vibrate(24);
          break;
        case 'strong':
          vibrate([36, 12, 36]);
          break;
        default:
          vibrate(12);
          break;
      }
    },

    notify(type) {
      switch (type) {
        case 'success':
          vibrate([18, 24, 36]);
          break;
        case 'warning':
          vibrate([30, 20, 30]);
          break;
        case 'error':
          vibrate([50, 20, 50, 20, 50]);
          break;
        default:
          vibrate(20);
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
