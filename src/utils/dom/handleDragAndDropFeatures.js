export const handleDragAndDropFeatures = ({ sourceId, destinationId }) => {
  // Fetch the source and destination containers
  const sourceContainer = document.getElementById(sourceId);
  const destinationContainer = document.getElementById(destinationId);

  // Validate containers
  if (!sourceContainer || !destinationContainer) {
    console.error("Invalid container IDs provided.");
    return;
  }

  console.log("Source and Destination containers are valid:", {
    source: sourceContainer,
    destination: destinationContainer,
  });

  // Add `dragstart` event listener to all child items of the source container
  const enableDragOnChildren = (container) => {
    Array.from(container.children).forEach((child) => {
      // child.setAttribute("draggable", "true"); // Ensure the item is draggable
      child.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", child.getAttribute("data-id"));
        console.log("Dragging item:", child);
      });
    });
  };

  // Allow items to be dropped in a container
  const enableDropOnContainer = (container) => {
    container.addEventListener("dragover", (event) => {
      event.preventDefault(); // Allow drop
    });

    container.addEventListener("drop", (event) => {
      event.preventDefault();
      const draggedId = event.dataTransfer.getData("text/plain");
      const draggedElement = document.querySelector(`[data-id='${draggedId}']`);

      if (draggedElement) {
        console.log("Dropping item:", draggedElement);
        container.appendChild(draggedElement); // Append to the drop container
      }
    });
  };

  // Enable drag and drop on both containers
  enableDragOnChildren(sourceContainer);
  enableDragOnChildren(destinationContainer);
  enableDropOnContainer(sourceContainer);
  enableDropOnContainer(destinationContainer);
};

export default handleDragAndDropFeatures;
