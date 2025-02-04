// Load the GTranslate Script
function loadGTranslateScript(callback) {
  // Check if script is already loaded
  if (
    document.querySelector(
      'script[src="https://cdn.gtranslate.net/widgets/latest/ln.js"]'
    )
  ) {
    console.log("GTranslate script already loaded.");
    if (callback) callback(); // Invoke callback if script is already loaded
    return;
  }

  const script = document.createElement("script");

  script.src = "https://cdn.gtranslate.net/widgets/latest/ln.js";
  script.defer = true;

  script.onload = () => {
    if (callback) callback();
  };

  script.onerror = () => {
    console.error("Failed to load GTranslate script.");
  };

  document.head.appendChild(script);
}

/**
 *
 * @param {string} containerId - The ID of the container where GTranslate will be initialized.
 * @param {Object} options - Additional options for GTranslate.
 * @returns
 */
export function initializeGTranslate(containerId, options = {}) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found!`);
    return;
  }

  // Clear the container to prevent duplicate content
  container.innerHTML = "";

  // Create the wrapper for GTranslate
  const gtranslateWrapper = document.createElement("div");
  gtranslateWrapper.classList.add("gtranslate_wrapper");
  container.appendChild(gtranslateWrapper);

  // Set GTranslate settings with "down" direction
  const defaultSettings = {
    default_language: "en",
    languages: ["en"],
    wrapper_selector: ".gtranslate_wrapper",
  };

  window.gtranslateSettings = { ...defaultSettings, ...options };

  // Load the GTranslate script
  loadGTranslateScript(() => window.gtranslateSettings);
}
