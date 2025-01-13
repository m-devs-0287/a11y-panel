let debugMode = false;

export const setDebugMode = (mode) => {
  if (typeof mode === "boolean") {
    debugMode = mode;
    console.log(`Debug mode is now: ${debugMode}`);
  } else {
    console.error("Invalid value for debug mode. Expected a boolean.");
  }
};

export const getDebugMode = () => debugMode;

export const debugLog = (message) => {
  if (debugMode) {
    console.log(message);
  }
};
