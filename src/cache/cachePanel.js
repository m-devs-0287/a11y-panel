import { debugLog } from "../utils/helpers/debugMode.js";
import { generateRecursiveElement } from "../utils/dom/generateHTML.js"; 
// import {panelUI} from "../config/config.js";

import { modalNavigation } from "../schemas/modalNavigationSchema.js";
import { accessPanel } from "../schemas/accessPanelSchema.js";
import { panelUI } from "../schemas/panelSchema.js";


let cachedPanel = null;

export const genAndCachedDOMElements = () => {
  // Log the current cachedPanel state for debugging

  if (!cachedPanel) {
    try {
      // Generate elements
      const panel = generateRecursiveElement(panelUI); // Panel
      const buttons = generateRecursiveElement(accessPanel); // Feature buttons
      const modalNav = generateRecursiveElement(modalNavigation); // Modal navigation

      // Cache elements
      cachedPanel = {
        panel,
        buttons,
        modalNav
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
