const DB_NAME = "A11yDB"; // Name of the IndexedDB database
const DB_STORE_NAME = "appState"; // Name of the object store
const DB_VERSION = 1; // Version of the database

let db; // Database reference

/**
 * Initialize the IndexedDB database
 */
export const initializeDatabase = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains(DB_STORE_NAME)) {
        db.createObjectStore(DB_STORE_NAME, { keyPath: "key" });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve();
    };

    request.onerror = (event) => {
      console.error("IndexedDB error:", event.target.error);
      reject(event.target.error);
    };
  });
};

/**
 * Save a key-value pair in the database
 * @param {string} key - The key to identify the state
 * @param {any} value - The value to store
 */
export const setState = (key, value) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE_NAME, "readwrite");
    const store = transaction.objectStore(DB_STORE_NAME);
    store.put({ key, value });

    transaction.oncomplete = () => resolve();
    transaction.onerror = (event) => reject(event.target.error);
  });
};

/**
 * Retrieve a value from the database by key
 * @param {string} key - The key to look up
 * @returns {Promise<any>} - The retrieved value or null if not found
 */
export const getState = (key) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE_NAME, "readonly");
    const store = transaction.objectStore(DB_STORE_NAME);
    const request = store.get(key);

    request.onsuccess = () => resolve(request.result?.value || null);
    request.onerror = (event) => reject(event.target.error);
  });
};

/**
 * Clear all data in the object store
 */
export const clearState = () => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(DB_STORE_NAME, "readwrite");
    const store = transaction.objectStore(DB_STORE_NAME);
    const request = store.clear();

    request.onsuccess = () => resolve();
    request.onerror = (event) => reject(event.target.error);
  });
};

// Export the state manager as an object
export const stateManager = {
  initializeDatabase,
  setState,
  getState,
  clearState,
};
