/**
 * Toggles a class on the target element.
 * @param {HTMLElement} eventElement - The element that triggers the event.
 * @param {HTMLElement} classHolder - The element to which the class will be toggled.
 * @param {string} className - The class name to toggle.
 */
export const toggleClassName = ({
  btnId,
  classHolder,
  className,
  aria = false,
}) => {
  // Ensure required parameters are provided
  if (!btnId || !classHolder || !className) {
    console.error(
      "Missing required parameters: btnId, classHolder, or className."
    );
    return;
  }

  // Get the button and class holder elements
  const button = document.getElementById(btnId);
  const holder = document.getElementById(classHolder);

  if (!button || !holder) {
    console.error("Button or class holder not found. Please check the IDs.");
    return;
  }

  // Check for required ARIA attributes and log warnings if missing
  if (aria) {
    if (!button.hasAttribute("aria-controls")) {
      console.warn(
        `Warning: Button with ID "${btnId}" is missing the "aria-controls" attribute.`
      );
    }
    if (!button.hasAttribute("aria-expanded")) {
      console.warn(
        `Warning: Button with ID "${btnId}" is missing the "aria-expanded" attribute.`
      );
    }
    if (!holder.hasAttribute("role")) {
      console.warn(
        `Warning: Holder with ID "${classHolder}" is missing the "role" attribute (e.g., "region").`
      );
    }
    if (!holder.hasAttribute("aria-hidden")) {
      console.warn(
        `Warning: Holder with ID "${classHolder}" is missing the "aria-hidden" attribute.`
      );
    }
  }

  // Add the click event listener only once to avoid duplicates
  if (!button.dataset.listenerAttached) {
    button.addEventListener("click", () => {
      // Toggle the class on the holder
      const isVisible = holder.classList.toggle(className);

      // Update ARIA attributes dynamically if `aria` is true
      if (aria) {
        button.setAttribute("aria-expanded", isVisible.toString());
        holder.setAttribute("aria-hidden", (!isVisible).toString());
      }
    });

    // Mark the button as having the listener attached
    button.dataset.listenerAttached = "true";
  }
};

/**
 * Removes one or more classes from the target element.
 * @param {HTMLElement} eventElement - The element that triggers the event.
 * @param {HTMLElement} classHolder - The element from which the class will be removed.
 * @param {string[] | string} classNames - The class name(s) to remove (can be a single string or an array of strings).
 */
export function removeClassName(eventElement, classHolder, classNames) {
  if (!eventElement || !classHolder) {
    console.error("Event element or class holder is not provided.");
    return;
  }

  eventElement.addEventListener("click", () => {
    if (Array.isArray(classNames)) {
      classNames.forEach((className) => {
        if (classHolder.classList.contains(className)) {
          classHolder.classList.remove(className);
        }
      });
    } else {
      if (classHolder.classList.contains(classNames)) {
        classHolder.classList.remove(classNames);
      }
    }
  });
}
