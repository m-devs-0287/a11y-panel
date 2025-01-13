export const generateRecursiveElement = (config = {}) => {
  // Determine namespace for SVG elements
  const namespace = ["svg", "path", "g"].includes(config.type)
    ? "http://www.w3.org/2000/svg"
    : undefined;

  // Default to 'div' if type is not provided
  const element = namespace
    ? document.createElementNS(namespace, config.type || "svg")
    : document.createElement(config.type || "div");

  // Apply standard attributes (id, className, label)
  if (config.id) element.id = config.id;
  if (config.className) {
    // Use 'class' for SVG elements
    namespace
      ? element.setAttribute("class", config.className)
      : (element.className = config.className);
  }
  if (config.label) element.textContent = config.label;

  // Apply dynamic attributes (aria, role, custom attributes)
  for (const [key, value] of Object.entries(config)) {
    if (!["type", "children", "className", "label", "id", "attributes"].includes(key)) {
      // Handle case-sensitive attributes
      const attributeName = key === "viewbox" ? "viewBox" : key; 
      if (value !== undefined && value !== null) {
        element.setAttribute(attributeName, value);
      }
    }
  }

  // Handle the 'attributes' object separately
  if (config.attributes) {
    Object.entries(config.attributes).forEach(([key, value]) => {
      // Handle case-sensitive attributes
      const attributeName = key === "viewbox" ? "viewBox" : key; 
      if (value !== undefined && value !== null) {
        element.setAttribute(attributeName, value);
      }
    });
  }

  // Recursively handle children elements
  if (config.children && Array.isArray(config.children)) {
    config.children.forEach((childConfig) => {
      // Recursive call with fallback
      const childElement = generateRecursiveElement(childConfig || {}); 
      // Append the child to the parent
      element.appendChild(childElement); 
    });
  }

  return element;
};
