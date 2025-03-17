let draggedElement = null;

// Enable draggable attribute and event listeners on child elements
const enableDragOnChildren = (container) => {
  Array.from(container.children).forEach((child) => {
    if (child.getAttribute("draggable") === "true") {
      child.classList.add("draggable-item");

      child.addEventListener("dragstart", (event) => {
        draggedElement = child;
        event.dataTransfer.setData("text/plain", child.getAttribute("data-id"));
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setDragImage(child, 0, 0); // Prevents floating duplicate
        child.classList.add("dragging");
      });

      child.addEventListener("dragend", () => {
        draggedElement = null;
        child.classList.remove("dragging");
      });
    }
  });
};

// Enable dragover functionality to determine correct drop position
const enableDragOver = (container) => {
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";

    // Remove 'drag-over' from all other items
    container
      .querySelectorAll(".drag-over")
      .forEach((el) => el.classList.remove("drag-over"));

    // Determine closest child where drop should occur
    const target = getClosestChild(container, event.clientY);

    if (target && target !== draggedElement) {
      target.classList.add("drag-over");
      const bounding = target.getBoundingClientRect();
      const offset = event.clientY - bounding.top;

      // Adjust position handling for no gaps scenario
      if (offset > bounding.height * 0.7) {
        target.after(draggedElement);
      } else if (offset < bounding.height * 0.3) {
        target.before(draggedElement);
      }
    } else {
      // If no valid target, move dragged item to the top
      if (
        container.children.length > 0 &&
        event.clientY < container.children[0].getBoundingClientRect().top
      ) {
        container.prepend(draggedElement);
      }
    }
  });

  container.addEventListener("dragleave", () => {
    container
      .querySelectorAll(".drag-over")
      .forEach((el) => el.classList.remove("drag-over"));
  });
};

// Handle drop functionality in the container
const enableDropOnContainer = (container) => {
  container.addEventListener("drop", (event) => {
    event.preventDefault();
    container
      .querySelectorAll(".drag-over")
      .forEach((el) => el.classList.remove("drag-over"));
  });
};

// Helper to get the closest child element to the cursor's Y position
const getClosestChild = (container, y) => {
  const children = Array.from(container.children).filter(
    (child) =>
      child !== draggedElement && child.getAttribute("draggable") === "true"
  );

  if (children.length === 0) return null;

  return children.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      return offset < 0 && offset > closest.offset
        ? { offset, element: child }
        : closest;
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
};

// Main function to handle drag and drop between two containers
export const handleDragAndDrop = ({ sourceId, destinationId }) => {
  const sourceContainer = document.getElementById(sourceId);
  const destinationContainer = document.getElementById(destinationId);

  if (!sourceContainer || !destinationContainer) {
    console.error("Invalid container IDs provided.");
    return;
  }

  console.log("Source and Destination containers are valid:", {
    source: sourceContainer,
    destination: destinationContainer,
  });

  enableDragOnChildren(sourceContainer);
  enableDragOver(sourceContainer);
  enableDropOnContainer(sourceContainer);

  enableDragOnChildren(destinationContainer);
  enableDragOver(destinationContainer);
  enableDropOnContainer(destinationContainer);
};
