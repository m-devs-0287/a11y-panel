import { features } from "../config/features.js";
import { stateManager } from "../db/stateManager.js";
import updateButtonState from "./../utils/helpers/updateButtonState.js";

/**
 * This function Loads and applies the current states for all features on page load.
 * is has a dependecy to updateButtonState and button text 
 */
export const loadCurrentStates = async () => {

  try {
    for (const [key, { hasState, defaultState, action, btnId, btnTexts, dynamicText }] of Object.entries(features)) {
      if (!hasState) {
        console.log(`Skipping feature "${key}" as it doesn't require state.`);
        continue;
      }

      // Check for the saved state in IndexedDB
      let savedState = await stateManager.getState(key);

      // If no saved state exists, initialize with the default state
      if (!savedState) {
        savedState = defaultState;
        await stateManager.setState(key, defaultState); // Save the default state only
        console.log(`Initialized default state for "${key}":`, defaultState);
      }

      // Call the feature action in loader mode
      if (typeof action === "function") {
          await action(()=> savedState(true));
      } else {
        console.warn(`No loader defined for feature "${key}".`);
      }

      updateButtonState(btnId, savedState, btnTexts, dynamicText);
    }
  } catch (error) {
    console.error("Error loading current states:", error);
  }
};

