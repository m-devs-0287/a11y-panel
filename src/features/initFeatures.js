import { features } from "../config/features.js";
import { stateManager } from "../db/stateManager.js";

export const initFeatures = () => {
  for (const [key, { btnId, action }] of Object.entries(features)) {
    const button = document.getElementById(btnId);
    if (button) {
      button.addEventListener("click", async () => {
        try {
          const newState = await action(); // Call the feature action
          if (newState) {
            await stateManager.setState(key, newState); // Save the new state to IndexedDB
          }
        } catch (error) {
          console.error(`Error handling feature "${key}":`, error);
        }
      });
    }
  }
};