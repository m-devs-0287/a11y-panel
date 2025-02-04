import { debugLog } from "../utils/helpers/debugMode.js";
import { generateRecursiveElement } from "../utils/dom/generateHTML.js";
import { modalNavigation } from "../schemas/modalNavigationSchema.js";
import { accessPanel } from "../schemas/accessPanelSchema.js";
import { panelUI } from "../schemas/panelSchema.js";
import { ttsComponent } from "../schemas/ttsSchema.js";
import { magnifierSchema } from "../schemas/magnifierSchema.js";

let cachedPanel = null;

export const genAndCachedDOMElements = () => {
  // Log the current cachedPanel state for debugging

  if (!cachedPanel) {
    try {
      // Generate elements
      const panel = generateRecursiveElement(panelUI);
      const buttons = generateRecursiveElement(accessPanel);
      const modalNav = generateRecursiveElement(modalNavigation);
      const tts = generateRecursiveElement(ttsComponent);
      const magnifier = generateRecursiveElement(magnifierSchema);

      // Cache elements
      cachedPanel = {
        panel,
        buttons,
        modalNav,
        tts,
        magnifier,
      };
    } catch (error) {
      debugLog("Error generating HTML elements:", error);
      return null;
    }
  } else {
    debugLog("Reusing cached HTML elements...");
  }

  return cachedPanel;
};

export const clearPanelCache = () => {
  if (cachedPanel) {
    debugLog("Clearing the cached panel...");
    cachedPanel = null;
    debugLog("Panel cache cleared successfully.");
  } else {
    debugLog("No panel in cache to clear.");
  }
};

// clearPanelCache()
