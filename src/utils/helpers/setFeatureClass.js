import { stateManager } from "../../db/stateManager.js";

/**
 * Sets or toggles a feature class on the `classHolder` element.
 *
 * @param {Object} params - The configuration object for the feature.
 * @param {string} params.dataName - The name of the feature in IndexedDB.
 * @param {string} params.btnId - The ID of the button associated with the feature.
 * @param {string[]} params.classes - The array of CSS classes to toggle.
 * @param {string[]} params.btnTexts - The array of button texts for each state.
 * @param {HTMLElement} params.classHolder - The element to apply the class to (default: document.body).
 * @param {boolean} params.isLoadMode - Whether the function is being called in load mode.
 * @returns {Object} - The updated state of the feature.
 */
export const setFeatureClass = async ({
  dataName,
  btnId,
  classes,
  btnTexts,
  classHolder = document.body,
  isLoadMode = false,
}) => {
  try {
    // Get the saved state from IndexedDB
    const savedState = await stateManager.getState(dataName);
    const currentIndex = savedState?.index || 0;

    // Calculate the new index (only in action mode)
    const newIndex = isLoadMode ? currentIndex : (currentIndex + 1) % (classes.length + 1);

    // Remove all existing classes
    classes.forEach((cls) => classHolder.classList.remove(cls));

    // Apply the new class if newIndex > 0
    const newClass = newIndex > 0 ? classes[newIndex - 1] : null;
    if (newClass) {
      classHolder.classList.add(newClass);
    }

    // Update the button text and active class
    const button = document.getElementById(btnId);
    if (button) {
      const buttonText = btnTexts[newIndex] || btnId.replace(/-/g, " ");
      button.innerText = buttonText; // Update button text
      button.classList.toggle("active", newIndex > 0); // Add/remove the active class
    }

    // Save the updated state in IndexedDB (only in action mode)
    const updatedState = { index: newIndex, property: newClass };
    if (!isLoadMode) {
      await stateManager.setState(dataName, updatedState);
    }

    return updatedState; // Return the updated state
  } catch (error) {
    console.error(`Error in setFeatureClass for "${dataName}":`, error);
  }
};

export default setFeatureClass;
