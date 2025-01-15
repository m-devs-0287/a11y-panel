import { stateManager } from "./stateManager.js";

export const initializeDB = async () => {
  try {
    await stateManager.initializeDatabase(); // Initializes the IndexedDB
    console.log("Database initialized successfully.");
  } catch (error) {
    console.error("Error initializing the database:", error);
    throw error; // Rethrow error to handle it in calling function
  }
};
