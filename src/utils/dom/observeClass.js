// Reusable function to observe class changes
export const observeClass = (targetElement, className, callback) => {
  if (!targetElement || !(targetElement instanceof Element)) {
    console.error("Invalid target element for observeClass.");
    return;
  }

  // Create a MutationObserver to watch for class changes
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        // Check if the target element has the specified class
        if (targetElement.classList.contains(className)) {
          callback(); // Execute the callback if the class is added
        }
      }
    }
  });

  // Start observing the target element
  observer.observe(targetElement, {
    attributes: true, // Watch for attribute changes
    attributeFilter: ["class"], // Only observe changes to the 'class' attribute
  });

  // Return the observer in case you need to disconnect it later
  return observer;
};
