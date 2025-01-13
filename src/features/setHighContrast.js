import { stateManager } from "../db/stateManager.js";

const highContrastClass = "high-contrast";

/**
 * Sets or toggles High Contrast mode.
 * @param {boolean} savedState - Optional saved state from IndexedDB.
 */
export const setHighContrast = async (savedState = null) => {
  try {
    let isHighContrast;

    if (savedState !== null) {
      isHighContrast = savedState;
    } else {
      isHighContrast = !document.body.classList.contains(highContrastClass);
      await stateManager.setState("highContrast", isHighContrast);
    }

    if (isHighContrast) {
      document.body.classList.add(highContrastClass);
    } else {
      document.body.classList.remove(highContrastClass);
    }

    console.log(`High contrast ${isHighContrast ? "enabled" : "disabled"}`);

    const button = document.getElementById("high-contrast");
    if (button)
      button.innerText = `High Contrast: ${isHighContrast ? "On" : "Off"}`;
  } catch (error) {
    console.error("Error toggling high contrast:", error);
  }
};
