/**
 * Toggles tabbing for focusable elements within a container.
 * @param {HTMLElement} container - The container element (e.g., the panel) to manage focusability.
 * @param {boolean} isEnabled - Whether to enable or disable tabbing within the container.
 */
export const toggleTabbing = (container, isEnabled) => {
  if (!container) {
    console.error("Container is not provided for toggleTabbing.");
    return;
  }

  // Select all focusable elements within the container
  const focusableSelectors = [
    "a[href]",
    "button",
    "textarea",
    "input[type='text']",
    "input[type='radio']",
    "input[type='checkbox']",
    "select",
    "[tabindex]:not([tabindex='-1'])",
  ];

  const focusableElements = container.querySelectorAll(focusableSelectors.join(","));

  focusableElements.forEach((element) => {
    if (isEnabled) {
      // Restore default tabbing behavior
      element.removeAttribute("tabindex");
    } else {
      // Disable tabbing
      element.setAttribute("tabindex", "-1");
    }
  });
};
