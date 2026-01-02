/**
 * Data Migration Utility
 * Run this once to re-encrypt any existing plain-text data in localStorage
 * 
 * HOW TO USE:
 * 1. Open browser console (F12)
 * 2. Run: forceReEncrypt()
 * 3. Refresh the page
 */

import { forceReEncryption } from './localStorage';
import { setSecureItem, getSecureItem } from './secureStorage';

// Expose function to window for easy console access
if (typeof window !== 'undefined') {
  window.forceReEncrypt = () => {
    forceReEncryption();
    
    // Also migrate loggedInUser if it exists
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser && loggedInUser !== '' && !loggedInUser.startsWith('__ENC__')) {
      try {
        const userData = JSON.parse(loggedInUser);
        setSecureItem('loggedInUser', userData);
        console.log('✅ LoggedInUser data encrypted');
      } catch (e) {
        localStorage.removeItem('loggedInUser');
      }
    }
    
    alert('Data re-encrypted! Please refresh the page.');
    window.location.reload();
  };
  
  // Auto-migrate on load if needed
  const checkAndMigrate = () => {
    const employees = localStorage.getItem('employees');
    const admin = localStorage.getItem('admin');
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    const needsMigration = 
      (employees && !employees.startsWith('__ENC__')) ||
      (admin && !admin.startsWith('__ENC__')) ||
      (loggedInUser && loggedInUser !== '' && !loggedInUser.startsWith('__ENC__'));
    
    if (needsMigration) {
      console.log('🔒 Migrating unencrypted data...');
      
      // Migrate employees and admin
      forceReEncryption();
      
      // Migrate loggedInUser separately (it's session data)
      if (loggedInUser && loggedInUser !== '' && !loggedInUser.startsWith('__ENC__')) {
        try {
          const userData = JSON.parse(loggedInUser);
          setSecureItem('loggedInUser', userData);
          console.log('✅ LoggedInUser data encrypted');
        } catch (e) {
          // If can't parse, remove it
          localStorage.removeItem('loggedInUser');
        }
      }
      
      window.location.reload();
    }
  };
  
  // Run migration check
  checkAndMigrate();
}
