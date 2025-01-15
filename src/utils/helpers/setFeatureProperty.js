import { stateManager } from "../../db/stateManager.js";

/**
 * Dynamically updates the DOM and state for a feature property.
 *
 * @param {Object} params - Configuration for the feature.
 * @param {string} params.cssKeyProperty - The CSS property to be updated (e.g., fontSize).
 * @param {string[]} params.values - Array of possible values for the property.
 * @param {string} params.transition - CSS transition for the property change.
 * @param {string} params.btnId - The button ID associated with the feature.
 * @param {boolean} params.isLoadMode - Whether the function is being called in load mode.
 */
export const setFeatureProperty = async ({
  cssKeyProperty,
  values,
  transition = "",
  btnId = "",
  isLoadMode = false,
}) => {
  try {
    // Data holders variables
    let index, cssValueProperty;

    // Get data from IndexedDB
    const data = await stateManager.getState(cssKeyProperty);

    if (isLoadMode) {
      // If loading, use the saved state or default to the first value
      index = data?.index || 0;
    } else {
      // Increment index and wrap around using modulo
      index = data ? (data.index + 1) % values.length : 0;
    }

    // Assign the current CSS value property
    cssValueProperty = values[index];

    // Apply transition if provided
    if (transition) {
      document.body.style.transition = transition;
    }

    // Apply CSS style
    document.body.style[cssKeyProperty] = cssValueProperty;

    // Save the state only if not in load mode
    if (!isLoadMode) {
      await stateManager.setState(cssKeyProperty, {
        index: index,
        property: cssValueProperty,
      });
    }

    // Remove transition after a short delay
    if (transition) {
      setTimeout(() => {
        document.body.style.transition = "none";
      }, 300);
    }

    // Update button if btnId is provided
    if (btnId) {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.classList.toggle("active", index > 0);

        const formattedText = btnId
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        btn.innerText = `${formattedText}: ${cssValueProperty}`;
      }
    }
  } catch (error) {
    console.error(
      `Error setting feature property for ${cssKeyProperty}:`,
      error
    );
  }
};

export default setFeatureProperty;
