import { stateManager } from "./stateManager.js";
import { debugLog } from "../utils/index.js";

export const initializeDB = async () => {
  try {
    await stateManager.initializeDatabase(); 
  } catch (error) {
    debugLog("Error initializing the database:", error);
    throw error;
  }
};
