import { stateManager } from "../db/stateManager.js";

const viewLinksClass = "highlight-links";

/**
 * Sets or toggles link highlighting.
 * @param {boolean} savedState - Optional saved state from IndexedDB.
 */
export const setViewLinks = async (savedState = null) => {
  try {
    let areLinksHighlighted;

    if (savedState !== null) {
      areLinksHighlighted = savedState;
    } else {
      areLinksHighlighted = !document.body.classList.contains(viewLinksClass);
      await stateManager.setState("viewLinks", areLinksHighlighted);
    }

    if (areLinksHighlighted) {
      document.body.classList.add(viewLinksClass);
    } else {
      document.body.classList.remove(viewLinksClass);
    }

    console.log(`Link highlighting ${areLinksHighlighted ? "enabled" : "disabled"}`);

    const button = document.getElementById("view-links");
    if (button)
      button.innerText = `View Links: ${areLinksHighlighted ? "On" : "Off"}`;
  } catch (error) {
    console.error("Error toggling link highlighting:", error);
  }
};
