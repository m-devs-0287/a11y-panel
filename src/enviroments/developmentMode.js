import { initializeDebugMode, debugLog } from "../utils/helpers/debugMode.js";

export const developmentMode = () => {
  initializeDebugMode(true);
  debugLog("You are in development mode");
};
