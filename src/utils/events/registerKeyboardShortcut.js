export const registerKeyboardShortcut = (shortcut, callback) => {
  document.addEventListener("keydown", (event) => {
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    const isValidShortcut =
      shortcut.every((key) => {
        if (key === "Meta") return isMac && event.metaKey; // Cmd for Mac
        if (key === "Ctrl") return !isMac && event.ctrlKey; // Ctrl for Windows/Linux
        if (key === "Alt") return event.altKey;
        if (key === "Shift") return event.shiftKey;
        return event.key.toLowerCase() === key.toLowerCase();
      });

    if (isValidShortcut) {
      event.preventDefault();
      callback(event);
    }
  });
};

export default registerKeyboardShortcut;