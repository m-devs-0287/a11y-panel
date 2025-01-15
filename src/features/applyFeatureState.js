// import { features } from "../config/features.js";

// /**
//  * Applies the state of a feature to the DOM and updates its button state.
//  * @param {string} featureKey - The unique key for the feature.
//  * @param {object} savedState - The saved state for the feature.
//  */
// export const applyFeatureState = (featureKey, savedState) => {
//   try {
//     const featureConfig = features[featureKey];
//     if (!featureConfig) {
//       console.warn(`No configuration found for feature "${featureKey}".`);
//       return;
//     }

//     const { action, btnId, btnTexts, dynamicText } = featureConfig;
//     const button = btnId ? document.getElementById(btnId) : null;

//     // Dynamically execute the handler from the feature config
//     if (typeof action === "function") {
//       action(savedState); // Apply the saved state
//     } else {
//       console.warn(`No valid action defined for feature "${featureKey}".`);
//     }

//     // Update the button's state and text
//     updateButtonState(button, savedState, btnTexts, dynamicText);
//   } catch (error) {
//     console.error(`Error applying feature state for "${featureKey}":`, error);
//   }
// };

// /**
//  * Updates the button's state and text dynamically.
//  * @param {HTMLElement} button - The button element associated with the feature.
//  * @param {object} savedState - The saved state of the feature.
//  * @param {string[]} btnTexts - Array of button texts for different states.
//  * @param {function} dynamicText - A function to compute button text dynamically.
//  */
// const updateButtonState = (button, savedState, btnTexts, dynamicText) => {
//   try {
//     if (!button) return;

//     // Update active class
//     if (savedState.value !== undefined) {
//       button.classList.toggle("active", savedState.value);
//     } else if (savedState.index !== undefined) {
//       button.classList.toggle("active", savedState.index > 0);
//     }

//     // Update button text
//     if (dynamicText) {
//       button.textContent = dynamicText(savedState);
//     } else if (btnTexts && Array.isArray(btnTexts)) {
//       const textIndex =
//         savedState.value !== undefined
//           ? (savedState.value ? 1 : 0)
//           : savedState.index || 0;
//       button.textContent = btnTexts[textIndex] || "Unknown";
//     }
//   } catch (error) {
//     console.error(`Error updating button state:`, error);
//   }
// };
