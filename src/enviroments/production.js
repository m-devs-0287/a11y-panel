import { initializeDebugMode } from "../utils/helpers/debugMode.js";

export const productionMode = () => {
  initializeDebugMode(false);
};
