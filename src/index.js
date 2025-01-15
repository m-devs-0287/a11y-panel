import { bootstrap } from "./lifecycle/bootstrap.js";
import { initFeatures } from "./features/initFeatures.js";
import { initializeDB } from "./db/initializeDB.js";
import { loadCurrentStates } from "./states/loadCurrentStates.js";
import initializeEnvironment from "./enviroments/index.js";
import { debugLog } from "./utils/index.js";


/**
 * Initializes the Accessibility Panel.
 * @param {Object} options - Configuration options for the panel.
 * @param {string} options.panelLocation - Selector for the panel container.
 * @param {string} options.buttonLocation - Selector for the button container.
 * @param {string} [options.theme="default"] - Theme to apply.
 * @param {boolean} [options.active=true] - Whether the panel is active by default.
 * @param {string} [options.environment="production"] - Environment mode.
 * @param {boolean} [options.debugMode=false] - Enables debug logs.
 */
export const initAccessibilityPanel = ({
  panelLocation = "#panel-container",
  buttonLocation = "#panel-container",
  theme = "light",
  environment = "production",
  
}) => {
  // initialize environment
  initializeEnvironment(environment);

  // bootstrap UI components
  bootstrap({
    panelLocation,
    buttonLocation,
    theme,
    environment,
  });

  // Core initialization logic
  const initializePanel = async () => {
    try {
      await initializeDB();          // Initialize IndexedDB
      await loadCurrentStates();     // Load and apply saved states
      initFeatures();                // Attach event listeners to features

      
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  };

  // Ensure DOM is ready before initializing
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePanel);
  } else {
    initializePanel();
  }
};
