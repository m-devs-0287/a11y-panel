import { stateManager } from "../../db/stateManager.js";
import { features } from "../../config/features.js";

export const initFeatBtnsDragAndDrop = () => {
  const draggables = document.querySelectorAll(".a11y-draggable");
  const containers = document.querySelectorAll(".a11y-dragover-container");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("a11y-dragging");
    });

    draggable.addEventListener("dragend", async () => {
      draggable.classList.remove("a11y-dragging");
      
      // Rebalance items across containers
      rebalanceColumns(["a11y-left-container", "a11y-right-container"]);

      // Save the updated order of items to IndexedDB
      await saveUpdatedOrder();
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();

      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".a11y-dragging");

      if (afterElement) {
        container.insertBefore(draggable, afterElement);
      } else {
        container.appendChild(draggable);
      }
    });
  });

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".a11y-draggable:not(.a11y-dragging)")];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - (box.top + box.height / 2);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY, element: null }
    ).element;
  }

  function rebalanceColumns(containerIds) {
    const containers = containerIds.map(id => document.getElementById(id)).filter(Boolean);

    if (containers.length === 0) {
      console.error("No valid container IDs provided.");
      return;
    }

    // Step 1: Collect all items from all containers
    const allItems = [];
    containers.forEach(container => {
      while (container.firstElementChild) {
        allItems.push(container.removeChild(container.firstElementChild));
      }
    });

    // Step 2: Determine how many items each container should have
    const totalItems = allItems.length;
    const itemsPerContainer = Math.floor(totalItems / containers.length);
    const remainder = totalItems % containers.length;

    // Step 3: Distribute items back to the containers
    let itemIndex = 0;
    containers.forEach((container, index) => {
      const itemsToPlace = index === 0
        ? itemsPerContainer + remainder  // First container gets the remainder
        : itemsPerContainer;

      for (let i = 0; i < itemsToPlace; i++) {
        container.appendChild(allItems[itemIndex++]);
      }
    });

    console.log("Rebalanced containers successfully.");
  }

  // Function to save the updated order of items in each container to IndexedDB
  async function saveUpdatedOrder() {
    const containers = ["leftContainer", "rightContainer"];  // Feature keys

    for (const featureKey of containers) {
      const featureConfig = features[featureKey];
      if (!featureConfig || !featureConfig.containerId) {
        console.error(`No containerId found for feature key: "${featureKey}".`);
        continue;
      }

      const container = document.getElementById(featureConfig.containerId);
      if (!container) {
        console.error(`Container with ID "${featureConfig.containerId}" not found.`);
        continue;
      }

      // Get the updated order of items in the container
      const updatedOrder = [...container.children].map((item) => item.getAttribute("data-id"));

      // Save the new order to IndexedDB
      try {
        await stateManager.setState(featureKey, { property: updatedOrder });
        console.log(`Updated state saved for "${featureKey}":`, updatedOrder);
      } catch (error) {
        console.error(`Failed to save updated state for "${featureKey}":`, error);
      }
    }
  }
};

export default initFeatBtnsDragAndDrop;
