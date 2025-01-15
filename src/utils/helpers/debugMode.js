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
export const debugLog = (message) => {
  if (!isDebugMode) return;

  // Get the caller location from stack trace
  const stack = new Error().stack.split("\n");
  const callerLine = stack[2]?.trim(); // Second line for the caller location
  const timeStamp = new Date().toISOString();

  // Log the message and location
  console.log(
    `%c[${timeStamp}] \n%c[Message]: ${message} \n%c[Location]: ${callerLine}`,
    "color: orange;","",""
  );
};

/**
 * Checks if debug mode is active.
 * @returns {boolean} - True if debug mode is enabled.
 */
export const isDebugEnabled = () => isDebugMode;
