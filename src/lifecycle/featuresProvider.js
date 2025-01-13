import * as features from "./features/index.js";
import { featuresConfig } from "./features/featuresConfig.js";

export const initFeatures = () => {
  Object.values(featuresConfig).forEach(({ id, action }) => {
    const button = document.getElementById(id);
    if (button && features[action]) {
      button.addEventListener("click", () => {
        features[action](); // Trigger the feature function
        console.log(`Feature "${action}" triggered by button "${id}".`);
      });
    } else {
      console.warn(
        `Feature "${action}" or button with ID "${id}" not found.`
      );
    }
  });
};
