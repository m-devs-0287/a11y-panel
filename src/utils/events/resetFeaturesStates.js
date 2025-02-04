import { features } from "./../../config/features.js";
import { stateManager } from "./../../db/stateManager.js";
import updateButtonState from "./../helpers/updateButtonState.js";

/**
 * Resets all accessibility features to their default states.
 */
export const resetStatesAndReloadFeatures = async () => {
  try {
    for (const [key, { hasState, defaultState, action, btnId, btnTexts, dynamicText }] of Object.entries(features)) {
      if (!hasState) {
        console.log(`Skipping feature "${key}" as it doesn't require state.`);
        continue;
      }

      // Reset the state to the default state
      await stateManager.setState(key, defaultState);

      // Call the feature action to apply the default state
      if (typeof action === "function") {
        await action(() => defaultState);
      } else {
        console.warn(`No reset action defined for feature "${key}".`);
      }

      // Update the button state to reflect the reset
      updateButtonState(btnId, defaultState, btnTexts, dynamicText);
    }

    console.log("All features have been reset to their default state!");
  } catch (error) {
    console.error("Error resetting features:", error);
  }
};

// Attach the reset functionality to the "Reset All" button
const resetButton = document.getElementById("reset-all");
if (resetButton) {
  resetButton.addEventListener("click", resetStatesAndReloadFeatures);
}

export default resetStatesAndReloadFeatures;