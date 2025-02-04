import { stateManager } from "../../db/stateManager.js";
import { features } from "../../config/features.js";

export const resetChildrenOrder = async ({ containers, isLoadMode }) => {
  for (let i = 0; i < containers.length; i++) {
    const featureKey = containers[i];

    // Get the feature configuration and container ID
    const featureConfig = features[featureKey];
    if (!featureConfig || !featureConfig.containerId) {
      console.error(`No containerId or configuration found for feature key: "${featureKey}".`);
      continue;
    }

    const containerId = featureConfig.containerId;
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID "${containerId}" not found.`);
      continue;
    }

    // Determine the correct order based on load mode or reset mode
    let order;
    if (isLoadMode) {
      // Load saved state from IndexedDB, fallback to default if not available
      const savedState = await stateManager.getState(featureKey);
      order = savedState?.property || featureConfig.defaultState?.property;
      console.log(`Loaded order from saved state for "${featureKey}":`, order);
    } else {
      // Use default state for reset mode
      order = featureConfig.defaultState?.property;
      console.log(`Using default order for "${featureKey}":`, order);
    }

    if (!order) {
      console.error(`No order found for feature key: "${featureKey}".`);
      continue;
    }

    // Reorder container children based on the determined order
    order.forEach((id) => {
      const item = document.querySelector(`[data-id='${id}']`);
      if (item) {
        container.appendChild(item); // Reorder items to match the saved/default state
      } else {
        console.warn(`Item with data-id '${id}' not found.`);
      }
    });

    console.log(`Container '${containerId}' reordered for feature key: ${featureKey}`);

    // Save updated state to IndexedDB if not in load mode
    if (!isLoadMode) {
      try {
        await stateManager.setState(featureKey, featureConfig.defaultState);
        console.log(`State updated in IndexedDB for feature key: ${featureKey}`);
      } catch (error) {
        console.error(`Failed to save updated state for "${featureKey}":`, error);
      }
    }
  }
};

export default resetChildrenOrder;
