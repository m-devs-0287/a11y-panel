import { stateManager } from "./stateManager.js";
import { updateFeaturesStates } from "../states/featuresStatesManager.js";

/**
 * Initializes the database and loads feature states.
 */
export const initializeDB = async () => {
  try {
    await stateManager.initializeDatabase(); // Initialize the database
    await updateFeaturesStates(); // Fetch and update states
  } catch (error) {
    console.error("Failed to initialize the database:", error);
  }
};
