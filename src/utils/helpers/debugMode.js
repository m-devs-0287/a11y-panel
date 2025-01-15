let isDebugMode = false;

/**
 * Initializes debug mode based on a boolean value.
 * @param {boolean} enable - Whether to enable debug mode.
 */
export const initializeDebugMode = (enable) => isDebugMode = enable;
  
/**
 * Logs debug information conditionally.
 * @param {string} type - The type of log (INFO, WARN, ERROR, DEBUG). Defaults to "INFO".
 * @param {string} message - The message to log.
 * @param {object} [context] - Optional additional context or metadata.
 */
export const debugLog = (message, isLocationOn = true) => {
  if (!isDebugMode) return;

  // Get the caller location from stack trace
  const stack = new Error().stack.split("\n")[2].trim(); // Get the second line for the direct caller
  const [ location ] = stack.match(/\(([^)]+)\)/) || ["Unknown location"]; // Extract file and line number
  console.log(
    `%c${message}\n%c[${new Date().toISOString()}] \n${ !isLocationOn ? "[Location]" + location : "" }`,
    "color: white; font-weight: bold;",
    "color: orange; ",
  );
};

/**
 * Checks if debug mode is active.
 * @returns {boolean} - True if debug mode is enabled.
 */
export const isDebugEnabled = () => isDebugMode;
