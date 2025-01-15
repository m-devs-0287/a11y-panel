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
    } else {
      classHolder.classList.add(className);
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
        }
      });
    } else {
      if (classHolder.classList.contains(classNames)) {
        classHolder.classList.remove(classNames);
      }
    }
  });
}
