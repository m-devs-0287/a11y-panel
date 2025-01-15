import { initializeDebugMode, debugLog } from "../utils/helpers/debugMode.js";

export const testingMode = () => {
  initializeDebugMode(true);
  debugLog("Debug mode is enabled in testing mode");
};
