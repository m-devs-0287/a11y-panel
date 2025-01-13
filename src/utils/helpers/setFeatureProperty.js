import { stateManager } from "../../db/stateManager.js";

export const setFeatureProperty = async ({
  cssKeyProperty,
  values,
  transition = "",
  btnId = "",
}) => {
  try {
    // Data holders variables
    let index, cssValueProperty;

    // Get data from IndexedDB
    const data = await stateManager.getState(cssKeyProperty);

    // Assign index value
    index = data?.index || 0;

    // Increment index and wrap around using modulo
    index = (index + 1) % values.length;

    // Assign updated CSS value property
    cssValueProperty = values[index];

    // Apply transition if provided
    if (transition) {
      document.body.style.transition = transition;
    }

    // Apply CSS style
    document.body.style[cssKeyProperty] = cssValueProperty;

    // Update state in IndexedDB
    await stateManager.setState(cssKeyProperty, {
      index: index,
      property: cssValueProperty,
    });

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
