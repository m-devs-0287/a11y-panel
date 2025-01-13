import { stateManager } from "../db/stateManager.js";
import { featuresConfig } from "../config/featuresConfig.js";
import { featuresStates } from "./featuresStates.js"; // For default states

const applyFeatureState = (featureKey, savedState, featureConfig) => {
  try {
    const { index, property, value } = savedState;

    const updateStylesAndBtnText = (btnId) => {
      const btn = document.getElementById(btnId);
      if (!btn) {
        console.warn(`Button with ID "${btnId}" not found.`);
        return; // Exit early if the button doesn't exist
      }

      // apply active class
      btn.classList.toggle("active", index > 0);

      // update text
      const btnText = btnId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      btn.textContent = `${btnText}: ${property}`;
    };

    switch (featureKey) {
      case "fontSize":
        document.body.style.fontSize = property;
        updateStylesAndBtnText("font-size");
        break;
      case "letterSpacing":
        document.body.style.letterSpacing = property;
        updateStylesAndBtnText("letter-spacing");
        break;
      case "textAlign":
        document.body.style.textAlign = property;
        updateStylesAndBtnText("text-align");
        break;
      case "fontWeight":
        document.body.style.fontWeight = property;
        updateStylesAndBtnText("font-weight");
        break;

      case "darkMode":
        const darkModeCheckboxBtn = document.getElementById(
          "toggle-dark-mode-checkbox"
        );
        value === true
          ? (darkModeCheckboxBtn.checked = true)
          : (darkModeCheckboxBtn.checked = false);
        document.body.classList.toggle("dark-mode", value === true);
        break;

      case "animations":
        const animationsCheckboxBtn = document.getElementById(
          "toggle-animation-checkbox"
        );
        value === true
          ? (animationsCheckboxBtn.checked = true)
          : (animationsCheckboxBtn.checked = false);
        document.body.classList.toggle("disable-animations", value === false);
        break;

      case "dyslexiaFont":
        console.log("applyFeatureState - dyslexiaFont");
      break;

      default:
        console.warn(
          `No logic defined to apply feature on load "${featureKey}"`
        );
    }
  } catch (error) {
    console.error(`Error applying feature state for "${featureKey}":`, error);
  }
};

/**
 * Loads current states from IndexedDB and applies them to the DOM.
 */
export const loadCurrentStates = async () => {
  try {
    for (const featureKey in featuresConfig) {
      const { action, hasState } = featuresConfig[featureKey];
      const defaultState = featuresStates[featureKey];

      // Skip features explicitly marked as not requiring a state
      if (!hasState) continue;

      // Fetch the current state from IndexedDB
      let savedState = await stateManager.getState(featureKey);

      // Initialize the default state if not already in IndexedDB
      if (!savedState) {
        if (defaultState) {
          await stateManager.setState(featureKey, defaultState);
          savedState = defaultState;
          console.log(
            `Initialized default state for ${featureKey}:`,
            defaultState
          );
        } else {
          console.warn(`No default state found for "${featureKey}". Skipping.`);
          continue;
        }
      }

      // Apply the saved state to the DOM
      applyFeatureState(featureKey, savedState, featuresConfig[featureKey]);
    }
  } catch (error) {
    console.error("Error loading current states:", error);
  }
};
