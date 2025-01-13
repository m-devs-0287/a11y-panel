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

  // Bootstrap the app
  bootstrap({
    panelLocation,
    buttonLocation,
    theme,
    environment,
    debugMode,
  });

  // Initialize features and restore state
  
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      await initializeDB();
      await loadCurrentStates();
      initFeatures();
    } catch (error) {
      console.error("Failed to initialize database or features:", error);
    }
  });

  debugLog("Accessibility Panel initialization complete.");
};

