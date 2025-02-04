const draggables = document.querySelectorAll(".a11y-draggable");
const containers = document.querySelectorAll(".a11y-dragover-container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("a11y-dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("a11y-dragging");
    rebalanceColumns("a11y-left-container", "a11y-right-container");
  })
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
  const draggableElements = [...container.querySelectorAll('.a11y-draggable:not(.a11y-dragging)')];

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

function rebalanceColumns(leftContainerId, rightContainerId) {
  const leftContainer = document.getElementById(leftContainerId);
  const rightContainer = document.getElementById(rightContainerId);

  if (!leftContainer || !rightContainer) {
    console.error("Invalid container IDs provided.");
    return;
  }

  let leftItems = leftContainer.children.length;
  let rightItems = rightContainer.children.length;

  while (Math.abs(leftItems - rightItems) > 1) {
    if (leftItems > rightItems) {
      rightContainer.appendChild(leftContainer.lastElementChild);
    } else {
      leftContainer.appendChild(rightContainer.firstElementChild); // Move from top
    }
    leftItems = leftContainer.children.length;
    rightItems = rightContainer.children.length;
  }
}
