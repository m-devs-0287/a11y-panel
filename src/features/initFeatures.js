import { featuresConfig } from "../config/featuresConfig.js";

export const initFeatures = () => {
  Object.values(featuresConfig).forEach(({ id, action }) => {
    const element = document.getElementById(id);

    if (element && action) {
      if (element.tagName === "BUTTON") {
        // Handle button clicks
        element.addEventListener("click", () => {
          action(); // Trigger the feature
          console.log(`Feature triggered by button: ${id}`);
        });
      } else if (element.tagName === "INPUT" && element.type === "checkbox") {
        // Handle checkbox changes
        element.addEventListener("change", () => {
          action(); // Trigger the feature
          console.log(`Feature triggered by checkbox: ${id}`);
        });
      } else {
        console.warn(`Unsupported element type for ID "${id}".`);
      }
    } else {
      console.warn(`Element with ID "${id}" not found or no action provided.`);
    }
  });
};


