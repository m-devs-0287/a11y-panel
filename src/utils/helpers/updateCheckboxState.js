import { stateManager } from "../../db/stateManager.js";

/**
 * Updates the state and class of a checkbox feature.
 *
 * @param {Object} params - Configuration for the checkbox feature.
 * @param {string} params.dataName - The name of the feature state in IndexedDB.
 * @param {string} params.btnId - The ID of the checkbox button.
 * @param {HTMLElement} params.classHolder - The element to toggle the class on (default: document.body).
 * @param {string} params.className - The class name to toggle.
 * @param {boolean} params.reverse - Whether to reverse the active state logic.
 * @param {boolean} params.isLoadMode - Whether the function is being called in load mode.
 */
export const updateCheckboxState = async ({
  dataName,
  btnId,
  classHolder = document.body,
  className,
  reverse = false,
  isLoadMode = false,
}) => {
  try {
    // Get the current state from IndexedDB
    const data = await stateManager.getState(dataName);

    // Determine the active state
    let isActive = isLoadMode ? data?.value ?? false : !data?.value;

    // Update the checkbox button state
    const checkboxBtn = document.getElementById(btnId);
    if (checkboxBtn) {
      checkboxBtn.checked = isActive; // Update checkbox UI
    }

    // Toggle the class based on the state
    if (!reverse) {
      classHolder.classList.toggle(className, isActive);
    } else {
      classHolder.classList.toggle(className, !isActive);
    }

    // Save the state in IndexedDB (only if not in load mode)
    if (!isLoadMode) {
      await stateManager.setState(dataName, { value: isActive });
    }
  } catch (error) {
    console.error(`Error updating checkbox state for "${dataName}":`, error);
  }
};

export default updateCheckboxState;
