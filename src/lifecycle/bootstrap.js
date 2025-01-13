import { mountComponents } from "./mountComponents.js";
import { debugLog } from "../utils/helpers/debugMode.js";

export const bootstrap = ({
  panelLocation,
  buttonLocation,
  theme,
  environment,
  debugMode,
}) => {
  if (debugMode) debugLog("Bootstrapping the application...");

  /**
   * Mount Components handles all pre-mount tasks
   * 
   */
  mountComponents({
    panelLocation,
    buttonLocation,
    theme,
    isDev: environment === "development",
    debugMode,
  });

  if (debugMode) debugLog("Application bootstrapped successfully.");
};
