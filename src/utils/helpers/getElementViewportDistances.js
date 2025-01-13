/**
 * Calculates the distances of a given element from the edges of the viewport.
 * @param {HTMLElement} element - The target element.
 * @returns {Object} An object containing distances from `top`, `right`, `bottom`, and `left`.
 */
export function getElementViewportDistances(element) {
  if (!(element instanceof HTMLElement)) {
    throw new Error("Invalid element provided. Please provide a valid HTML element.");
  }

  // Get the element's bounding rectangle
  const rect = element.getBoundingClientRect();

  // Calculate distances from each edge of the viewport
  const distances = {
    top: rect.top,
    right: window.innerWidth - rect.right,
    bottom: window.innerHeight - rect.bottom,
    left: rect.left,
  };

  return distances;
}
