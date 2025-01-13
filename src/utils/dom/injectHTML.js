// Uses append, ensuring the injected content becomes the first child
export const appendGenHTML = (containerSelector, htmlContent, debugMode = false) => {
  const container = document.querySelector(containerSelector);

  if (container) {
    if (typeof htmlContent === 'string') {
      // If the content is a string, convert it to a DOM element
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      while (tempDiv.firstChild) {
        container.insertBefore(tempDiv.firstChild, container.firstChild); // Insert as the first child
      }
      if (debugMode) console.log(`Injected HTML content into "${containerSelector}" as the first child.`);
    } else if (htmlContent instanceof HTMLElement) {
      // If the content is already a DOM element, insert it as the first child
      container.insertBefore(htmlContent, container.firstChild);
      if (debugMode) console.log(`Injected DOM element into "${containerSelector}" as the first child.`);
    } else {
      if (debugMode) console.error('Invalid HTML content provided. Must be a string or a DOM element.');
    }
  } else {
    if (debugMode) console.error(`Container with selector "${containerSelector}" not found.`);
  }
};
