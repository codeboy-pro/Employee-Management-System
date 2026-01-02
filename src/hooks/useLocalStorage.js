import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook that syncs React state with localStorage
 * @param {string} key - The localStorage key
 * @param {any} initialValue - Initial value if nothing in localStorage
 * @returns {[any, Function, boolean, string|null]} - [value, setValue, loading, error]
 */
export const useLocalStorage = (key, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get initial value from localStorage or use provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(`Error reading localStorage key "${key}":`, err);
      setError(`Failed to load data from storage`);
      return initialValue;
    }
  });

  // Update localStorage whenever storedValue changes
  useEffect(() => {
    try {
      if (storedValue !== undefined && storedValue !== null) {
        localStorage.setItem(key, JSON.stringify(storedValue));
      }
      setLoading(false);
    } catch (err) {
      console.error(`Error writing to localStorage key "${key}":`, err);
      setError(`Failed to save data to storage`);
      setLoading(false);
    }
  }, [key, storedValue]);

  // Wrapped setter that also persists to localStorage
  const setValue = useCallback((value) => {
    try {
      // Allow value to be a function (like setState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      setError(null);
    } catch (err) {
      console.error(`Error setting localStorage key "${key}":`, err);
      setError(`Failed to update data`);
    }
  }, [key, storedValue]);

  return [storedValue, setValue, loading, error];
};

export default useLocalStorage;
