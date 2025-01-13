/**
 * Tears down the application by cleaning up global event listeners and DOM changes.
 */
export const teardown = () => {
  console.log("Tearing down application...");

  // Remove event listeners
  document.removeEventListener("click", handleGlobalClick);
  document.removeEventListener("keydown", handleGlobalKeydown);

  // Stop intervals or timeouts if applicable
  if (window.globalInterval) {
    clearInterval(window.globalInterval);
    delete window.globalInterval;
  }

  // Remove the accessibility panel and buttons
  const panel = document.querySelector("#accessibility-panel");
  const buttons = document.querySelector("#a11y-access-hub");
  if (panel) panel.remove();
  if (buttons) buttons.remove();

  console.log("Application teardown complete.");
};
