import { stateManager } from "../../db/stateManager.js";

export const setFeatureClass = async ({ classes = [], btnId = "" }) => {
  try {
    if (!classes || classes.length === 0) {
      throw new Error("At least one class is required.");
    }

    const cssKeyProperty = classes.join("-"); // Unique key for IndexedDB (based on all classes)

    // Get the current state from IndexedDB
    const data = await stateManager.getState(cssKeyProperty);
    let index = data?.index || 0;

    // Remove the current class if it exists
    if (classes[index]) {
      document.body.classList.remove(classes[index]);
    }

    // Increment index and wrap around using modulo
    index = (index + 1) % classes.length;

    // Apply the new class, if any
    const newClass = classes[index];
    if (newClass) {
      document.body.classList.add(newClass);
    }

    // Save the new state in IndexedDB
    await stateManager.setState(cssKeyProperty, { index, property: newClass });

    // Update the button UI
    if (btnId) {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.classList.toggle("active", newClass !== "");
        const formattedText = btnId
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        btn.textContent = `${formattedText}: ${
          newClass ? newClass : "Disabled"
        }`;
      }
    }
  } catch (error) {
    console.error("Error toggling classes:", error);
  }
};
