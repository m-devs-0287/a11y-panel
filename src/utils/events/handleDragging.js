export const handleDragging = (container, dragElement, debugMode = false) => {
  if (!container || !dragElement) {
    if (debugMode) {
      console.error("Container or drag element not provided.");
    }
    return;
  }

  let isDragging = false;
  let startX = 0;
  let startY = 0;

  // Define the edge distances
  const dimensionsMap = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  };

  // Ensure container has fixed width and height
  const containerStyle = window.getComputedStyle(container);
  container.style.width = containerStyle.width; // Lock current width
  container.style.height = containerStyle.height; // Lock current height

  if (debugMode) {
    console.log("Initialized dragging with the following container styles:", {
      width: container.style.width,
      height: container.style.height,
    });
  }

  // Start dragging
  dragElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - container.offsetLeft;
    startY = e.clientY - container.offsetTop;

    // Clear conflicting styles and disable transitions
    container.style.transition = "none";
    container.style.right = ""; // Clear conflicting right style
    container.style.bottom = ""; // Clear conflicting bottom style

    if (debugMode) console.log("Drag started. Initial positions:", { startX, startY });

    // Add event listeners for dragging
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  // Dragging logic
  function onMouseMove(e) {
    if (!isDragging) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let newX = e.clientX - startX;
    let newY = e.clientY - startY;

    // Apply boundary constraints using dimensionsMap
    if (newX < dimensionsMap.left) newX = dimensionsMap.left; // Left edge
    if (newX + containerWidth > screenWidth - dimensionsMap.right)
      newX = screenWidth - containerWidth - dimensionsMap.right; // Right edge
    if (newY < dimensionsMap.top) newY = dimensionsMap.top; // Top edge
    if (newY + containerHeight > screenHeight - dimensionsMap.bottom)
      newY = screenHeight - containerHeight - dimensionsMap.bottom; // Bottom edge

    // Apply new position
    container.style.left = `${newX}px`;
    container.style.top = `${newY}px`;

    if (debugMode) {
      console.log("Dragging in progress. Current position:", {
        left: container.style.left,
        top: container.style.top,
      });
    }
  }

  // Stop dragging and snap to the nearest edge
  function onMouseUp() {
    if (isDragging) {
      snapToNearestEdge();
    }
    isDragging = false;

    // Restore transitions
    container.style.transition = "top 0.2s ease, left 0.2s ease";

    if (debugMode) {
      console.log("Drag ended. Final position:", {
        left: container.style.left,
        top: container.style.top,
      });
    }

    // Remove event listeners
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  // Snap the container to the nearest edge
  function snapToNearestEdge() {
    const containerRect = container.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    const distanceToLeft = containerRect.left;
    const distanceToRight = screenWidth - containerRect.right;

    const minDistance = Math.min(distanceToLeft, distanceToRight);

    // Snap to the closest edge
    if (minDistance === distanceToLeft) {
      container.style.left = `${dimensionsMap.left}px`;
    } else if (minDistance === distanceToRight) {
      container.style.left = `${
        screenWidth - container.offsetWidth - dimensionsMap.right
      }px`;
    }

    if (debugMode) {
      console.log("Snapped to nearest edge. New position:", {
        left: container.style.left,
      });
    }
  }

  // Handle window resize to keep the container within bounds
  function handleResize() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const containerRect = container.getBoundingClientRect();

    let adjustedLeft = containerRect.left;
    let adjustedTop = containerRect.top;

    // Adjust position if out of bounds
    if (
      adjustedLeft + containerRect.width >
      screenWidth - dimensionsMap.right
    ) {
      adjustedLeft = screenWidth - containerRect.width - dimensionsMap.right;
    }
    if (adjustedLeft < dimensionsMap.left) {
      adjustedLeft = dimensionsMap.left;
    }
    if (
      adjustedTop + containerRect.height >
      screenHeight - dimensionsMap.bottom
    ) {
      adjustedTop = screenHeight - containerRect.height - dimensionsMap.bottom;
    }
    if (adjustedTop < dimensionsMap.top) {
      adjustedTop = dimensionsMap.top;
    }

    // Apply the adjusted position
    container.style.left = `${adjustedLeft}px`;
    container.style.top = `${adjustedTop}px`;

    if (debugMode) {
      console.log("Adjusted position after resize:", {
        left: container.style.left,
        top: container.style.top,
      });
    }

    snapToNearestEdge()
  }

  // Listen for window resize events
  window.addEventListener("resize", handleResize);
};
