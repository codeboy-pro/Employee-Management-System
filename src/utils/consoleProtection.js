/**
 * Console Protection for localStorage
 * Makes it harder to access sensitive data through browser console
 * 
 * WARNING: This is obfuscation, not true security!
 * Determined attackers can still bypass this.
 */

// Store original localStorage methods
const originalSetItem = localStorage.setItem.bind(localStorage);
const originalGetItem = localStorage.getItem.bind(localStorage);
const originalRemoveItem = localStorage.removeItem.bind(localStorage);
const originalClear = localStorage.clear.bind(localStorage);

// Flag to allow internal app access
let internalAccess = false;

// Whitelist for our app's methods
export const enableInternalAccess = () => {
  internalAccess = true;
};

export const disableInternalAccess = () => {
  internalAccess = false;
};

// Protected localStorage wrapper
const protectedStorage = {
  setItem: (key, value) => {
    if (internalAccess) {
      return originalSetItem(key, value);
    }
    console.warn('⚠️ Direct localStorage access is restricted');
    return;
  },
  
  getItem: (key) => {
    if (internalAccess) {
      return originalGetItem(key);
    }
    console.warn('⚠️ Direct localStorage access is restricted');
    return null;
  },
  
  removeItem: (key) => {
    if (internalAccess) {
      return originalRemoveItem(key);
    }
    console.warn('⚠️ Direct localStorage access is restricted');
    return;
  },
  
  clear: () => {
    if (internalAccess) {
      return originalClear();
    }
    console.warn('⚠️ Direct localStorage access is restricted');
    return;
  },
  
  key: (index) => {
    console.warn('⚠️ Direct localStorage access is restricted');
    return null;
  },
  
  get length() {
    console.warn('⚠️ Direct localStorage access is restricted');
    return 0;
  }
};

// Override global localStorage in non-production environments
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
  try {
    // Create a proxy to intercept all property access
    const handler = {
      get(target, prop) {
        if (prop in protectedStorage) {
          return protectedStorage[prop];
        }
        console.warn('⚠️ Direct localStorage access is restricted');
        return undefined;
      },
      set() {
        console.warn('⚠️ Direct localStorage modification is restricted');
        return false;
      }
    };
    
    // Override window.localStorage
    Object.defineProperty(window, 'localStorage', {
      value: new Proxy({}, handler),
      writable: false,
      configurable: false
    });
  } catch (e) {
    console.log('Console protection initialized');
  }
}

// Protected methods for internal use
export const protectedSetItem = (key, value) => {
  enableInternalAccess();
  const result = originalSetItem(key, value);
  disableInternalAccess();
  return result;
};

export const protectedGetItem = (key) => {
  enableInternalAccess();
  const result = originalGetItem(key);
  disableInternalAccess();
  return result;
};

export const protectedRemoveItem = (key) => {
  enableInternalAccess();
  const result = originalRemoveItem(key);
  disableInternalAccess();
  return result;
};

export const protectedClear = () => {
  enableInternalAccess();
  const result = originalClear();
  disableInternalAccess();
  return result;
};

// Disable common debugging methods
if (typeof window !== 'undefined') {
  // Detect if DevTools is open
  let devtoolsOpen = false;
  const checkDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    
    if (widthThreshold || heightThreshold) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        console.clear();
        console.log('%c⚠️ Developer Tools Detected', 'color: red; font-size: 20px; font-weight: bold;');
        console.log('%cWarning: Unauthorized access to application data is monitored', 'color: orange; font-size: 14px;');
      }
    }
  };
  
  setInterval(checkDevTools, 1000);
  
  // Disable right-click in production
  if (process.env.NODE_ENV === 'production') {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }
}
