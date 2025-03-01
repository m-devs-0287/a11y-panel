import { features } from "../config/features.js";
import { stateManager } from "../db/stateManager.js";
import { resetButtonLayout } from "../features/featureActions.js";
import updateButtonState from "./../utils/helpers/updateButtonState.js";

/**
 * This function loads and applies the current states for all features on page load.
 */
export const loadCurrentStates = async () => {
  const layoutContainers = [];  // Collect containers that require layout reordering

  try {
    for (const [
      key,
      { hasState, defaultState, action, btnId, btnTexts, dynamicText, containerId },
    ] of Object.entries(features)) {

      // Check if the feature requires state
      if (!hasState) {
        // console.log(`Skipping feature "${key}" as it doesn't require state.`);
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

      // Collect containers for layout reordering if the feature has a containerId
      if (containerId) {
        layoutContainers.push(containerId);
      }

      // Call the feature action in loader mode if defined
      if (typeof action === "function") {
        await action(() => savedState); // Pass the saved state to the action
      } else {
        console.warn(`No loader defined for feature "${key}".`);
      }

      // Update the button state (if applicable)
      updateButtonState(btnId, savedState, btnTexts, dynamicText);
    }

    // Step 3: Reorder the containers dynamically based on collected container IDs
    if (layoutContainers.length > 0) {
      await resetButtonLayout(true, layoutContainers);  // Pass containers dynamically
    }

  } catch (error) {
    console.error("Error loading current states:", error);
  }
};
