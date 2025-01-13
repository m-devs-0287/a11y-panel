import { getElementViewportDistances } from "../helpers/getElementViewportDistances.js";

/**
 * Aligns the panel with the access hub based on viewport distances.
 * @param {HTMLElement} panel - The panel element to move.
 * @param {HTMLElement} accessHub - The access hub element to align with.
 * @param {boolean} isOpen - Whether the panel is open or closed.
 */
export function alignPanelWithAccessHub(panel, accessHub, isOpen) {
  if (!panel || !accessHub) {
    console.error("Both panel and accessHub elements are required.");
    return;
  }

  // Get distances of the access hub
  const distances = getElementViewportDistances(accessHub);

  // Decide which side to align (left or right)
  const alignToLeft = distances.left < distances.right;

  if (isOpen) {
    // Align the panel to the same side as the access hub
    panel.style.top = `${accessHub.offsetTop}px`;
    panel.style.left = alignToLeft ? "20px" : ""; // Snap to left edge
    panel.style.right = alignToLeft ? "" : "20px"; // Snap to right edge
    panel.style.transition = "transform 0.3s ease"; // Smooth transition
    panel.style.transform = "translateX(0)"; // Bring panel into view
  } else {
    // Move the panel off-screen, keeping it ready to slide in
    panel.style.top = `${accessHub.offsetTop}px`;
    panel.style.left = alignToLeft ? "-300px" : ""; // Off-screen on the left
    panel.style.right = alignToLeft ? "" : "-300px"; // Off-screen on the right
    panel.style.transition = "transform 0.3s ease"; // Smooth transition
    panel.style.transform = alignToLeft ? "translateX(-100%)" : "translateX(100%)";
  }
}
