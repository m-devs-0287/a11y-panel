let currentEnv = "production"; // Default environment

/**
 * Switches the application mode between development and production.
 * @param {string} mode - The mode to switch to, either "development" or "production".
 * @param {boolean} [debugMode=false] - Whether to log debug information.
 */
export const switchEnvironmentMode = (mode, debugMode = false) => {
  if (mode !== "development" && mode !== "production") {
    console.error(`Invalid mode: ${mode}. Use "development" or "production".`);
    return;
  }

  currentEnv = mode;
  if (debugMode) {
    console.log(`Environment switched to ${currentEnv} mode.`);
  }

  // Add mode-specific logic here, if needed
  if (currentEnv === "development") {
    if (debugMode) console.log("Development mode enabled. Debugging active.");
  } else {
    if (debugMode) console.log("Production mode enabled. Optimizations active.");
  }
};

/**
 * Gets the current environment mode.
 * @returns {string} The current environment mode.
 */
export const getCurrentEnvironment = () => currentEnv;
