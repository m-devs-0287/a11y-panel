export const keyboardShortcuts = (targetElement, keys, callback) => {
  if (!targetElement || !(targetElement instanceof HTMLElement)) {
    throw new Error("Invalid target element provided.");
  }

  if (!Array.isArray(keys) || keys.length === 0) {
    throw new Error("Keys must be a non-empty array.");
  }

  // Track currently pressed keys
  const pressedKeys = new Set();

  // Event listener to detect keydown
  const handleKeyDown = (event) => {
    pressedKeys.add(event.key.toLowerCase());

    // Check if all keys in the array are pressed
    const allKeysPressed = keys.every((key) => pressedKeys.has(key.toLowerCase()));

    if (allKeysPressed) {
      callback(targetElement);
    }
  };

  // Event listener to detect keyup (to reset tracking)
  const handleKeyUp = (event) => {
    pressedKeys.delete(event.key.toLowerCase());
  };

  // Attach event listeners
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  // Cleanup function to remove event listeners
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };
}

export default keyboardShortcuts;