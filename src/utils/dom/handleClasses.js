import { debugLog } from "./../../utils/index.js";

/**
 * Toggles a class on the target element.
 * @param {HTMLElement} eventElement - The element that triggers the event.
 * @param {HTMLElement} classHolder - The element to which the class will be toggled.
 * @param {string} className - The class name to toggle.
 */
export function toggleClassName(eventElement, classHolder, className) {
  if (!eventElement || !classHolder) {
    console.error("Event element or class holder is not provided.");
    return;
  }

  eventElement.addEventListener("click", () => {
    if (classHolder.classList.contains(className)) {
      classHolder.classList.remove(className);
      debugLog(`Class "${className}" removed from`, classHolder);
    } else {
      classHolder.classList.add(className);
      debugLog(`Class "${className}" added to`, classHolder);
    }
  });
}

/**
 * Adds a class to the target element.
 * @param {HTMLElement} eventElement - The element that triggers the event.
 * @param {HTMLElement} classHolder - The element to which the class will be added.
 * @param {string} className - The class name to add.
 */
export function addClassName(eventElement, classHolder, className) {
  if (!eventElement || !classHolder) {
    console.error("Event element or class holder is not provided.");
    return;
  }

  eventElement.addEventListener("click", () => {
    if (!classHolder.classList.contains(className)) {
      classHolder.classList.add(className);
      debugLog(`Class "${className}" added to`, classHolder);
    } else {
      debugLog(`Class "${className}" is already present on`, classHolder);
    }
  });
}

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
          debugLog(`Class "${className}" removed from`, classHolder);
        }
      });
    } else {
      if (classHolder.classList.contains(classNames)) {
        classHolder.classList.remove(classNames);
        debugLog(`Class "${classNames}" removed from`, classHolder);
      }
    }
  });
}

/**
 * Toggles the 'active' class on the clicked button and removes it from its siblings.
 * @param {string} targetId - The ID of the button to toggle the active class.
 * @param {string} buttonClass - The shared class of all buttons to reset the active state.
 * @param {string} activeClass - The class name used to indicate the active state.
 */
export function toggleActiveClass(targetId, buttonClass = "accessibility-feat-button", activeClass = "active") {
  const activeButton = document.getElementById(targetId);
  const allButtons = document.querySelectorAll(`.${buttonClass}`);

  if (!activeButton || allButtons.length === 0) {
    console.error("Invalid target button or no buttons found for:", buttonClass);
    return;
  }

  // Remove the active class from all buttons
  allButtons.forEach((button) => button.classList.remove(activeClass));

  // Add the active class to the target button
  activeButton.classList.add(activeClass);
}
