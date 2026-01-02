/**
 * Secure Storage Utility
 * Obfuscates localStorage data to prevent casual inspection
 * Note: This is NOT true encryption - for real security, use backend authentication
 */

import { protectedSetItem, protectedGetItem, protectedRemoveItem, protectedClear } from './consoleProtection';

// Simple obfuscation key (in production, this could be more complex)
const SECRET_KEY = 'EMP_MGT_SYS_2026_SECURE_KEY';

/**
 * XOR cipher for encoding/decoding
 */
const xorCipher = (str, key) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
};

/**
 * Encode data for storage
 */
export const encodeData = (data) => {
  try {
    // Convert to JSON string
    const jsonString = JSON.stringify(data);
    
    // Apply XOR cipher
    const encrypted = xorCipher(jsonString, SECRET_KEY);
    
    // Convert to base64
    const base64 = btoa(encrypted);
    
    // Add a prefix to identify encoded data
    return `__ENC__${base64}`;
  } catch (error) {
    console.error('Error encoding data:', error);
    return null;
  }
};

/**
 * Decode data from storage
 */
export const decodeData = (encodedData) => {
  try {
    // Check if data is encoded
    if (!encodedData || !encodedData.startsWith('__ENC__')) {
      // Try to parse as regular JSON (backward compatibility)
      return JSON.parse(encodedData);
    }
    
    // Remove prefix
    const base64 = encodedData.replace('__ENC__', '');
    
    // Decode from base64
    const encrypted = atob(base64);
    
    // Apply XOR cipher to decrypt
    const decrypted = xorCipher(encrypted, SECRET_KEY);
    
    // Parse JSON
    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Error decoding data:', error);
    return null;
  }
};

/**
 * Secure localStorage setItem
 */
export const setSecureItem = (key, value) => {
  try {
    const encoded = encodeData(value);
    if (encoded) {
      protectedSetItem(key, encoded);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error setting secure item:', error);
    return false;
  }
};

/**
 * Secure localStorage getItem
 */
export const getSecureItem = (key) => {
  try {
    const item = protectedGetItem(key);
    if (!item) return null;
    return decodeData(item);
  } catch (error) {
    console.error('Error getting secure item:', error);
    return null;
  }
};

/**
 * Remove item from localStorage
 */
export const removeSecureItem = (key) => {
  try {
    protectedRemoveItem(key);
    return true;
  } catch (error) {
    console.error('Error removing item:', error);
    return false;
  }
};

/**
 * Clear all localStorage
 */
export const clearSecureStorage = () => {
  try {
    protectedClear();
    return true;
  } catch (error) {
    console.error('Error clearing storage:', error);
    return false;
  }
};
