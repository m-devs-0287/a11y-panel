import { bootstrap } from "./lifecycle/bootstrap.js";
import { setDebugMode, debugLog } from "./utils/helpers/debugMode.js";
import { initFeatures } from "./features/initFeatures.js";
import { initializeDB } from "./db/initializeDB.js";
import { loadCurrentStates } from "./states/loadCurrentStates.js";

export const initAccessibilityPanel = ({
  panelLocation,
  buttonLocation,
  theme = "default",
  active = true,
  environment = "production",
  debugMode = false,
}) => {
  // Set debug mode
  setDebugMode(debugMode);

  // Debug: Log application initialization
  debugLog("Initializing Accessibility Panel...");

  // Bootstrap the app (render panel and button UI)
  bootstrap({
    panelLocation,
    buttonLocation,
    theme,
    environment,
    debugMode,
  });

  // Initialize features and restore state
  const initializePanel = async () => {
    try {
      // 1. Initialize IndexedDB
      await initializeDB();

      // 2. Load saved states from IndexedDB and apply them
      await loadCurrentStates();

      // 3. Attach event listeners to buttons
      initFeatures();

      debugLog("Accessibility Panel initialized successfully.");
    } catch (error) {
      console.error("Failed to initialize database or features:", error);
    }
  };

  // Check if the DOM is ready before initializing
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePanel);
  } else {
    initializePanel();
  }

  debugLog("Accessibility Panel initialization complete.");
};
