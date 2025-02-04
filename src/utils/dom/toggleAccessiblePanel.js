export const trapFocus = (container) => {
  const focusableSelectors =
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";
  const focusableElements = Array.from(container.querySelectorAll(focusableSelectors));

  if (focusableElements.length === 0) {
    console.warn("No focusable elements found inside the container.");
    container.setAttribute("tabindex", "-1");
    return () => {
      container.removeAttribute("tabindex");
    };
  }


  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  const handleFocusTrap = (event) => {
    if (event.key === "Tab") {
      if (event.shiftKey && document.activeElement === firstFocusable) {
        // Shift + Tab: Go to last focusable element
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        // Tab: Go to first focusable element
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  container.addEventListener("keydown", handleFocusTrap);
  // Return a cleanup function to remove the focus trap
  return () => {
    container.removeEventListener("keydown", handleFocusTrap);
  };
};

export const handleAnimationTimeout = ({ element, duration, callback }) => {
  // Check if animations are disabled
  const animationsDisabled = document.body.classList.contains("disable-animations");

  if (animationsDisabled) {
    // If animations are disabled, execute the callback immediately
    callback();
  } else {
    // Otherwise, wait for the specified duration before executing the callback
    setTimeout(() => {
      callback();
    }, duration);
  }
};

export const toggleAccessiblePanel = ({ target, trigger, closeButton }) => {
  const panel = document.getElementById(target);
  const triggerElement = document.getElementById(trigger);
  const closeButtonElement = document.getElementById(closeButton);

  // Validate elements
  if (!panel || !triggerElement || !closeButtonElement) {
    console.error(
      `Missing elements: Panel (${target}), Trigger (${trigger}), or Close Button (${closeButton}).`
    );
    return;
  }

  // Initialize ARIA attributes
  panel.setAttribute("aria-hidden", "true");
  triggerElement.setAttribute("aria-expanded", "false");

  let removeFocusTrap = null; // To store the cleanup function for focus trap

  const togglePanel = () => {
    const isActive = panel.classList.toggle("active");
    panel.setAttribute("aria-hidden", !isActive);
    triggerElement.setAttribute("aria-expanded", isActive);

    if (isActive) {
      panel.style.visibility = "visible";

      // Move focus to the panel's first focusable element
      const firstFocusable = panel.querySelector(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      if (firstFocusable) {
        firstFocusable.focus();
      }

      // Enable focus trap and store the cleanup function
      removeFocusTrap = trapFocus(panel);

      // Add listeners for closing
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("click", handleOutsideClick);
    } else {
      closePanel();
    }
  };

  const closePanel = () => {
    panel.classList.remove("active");
    panel.setAttribute("aria-hidden", "true");
    triggerElement.setAttribute("aria-expanded", "false");

    handleAnimationTimeout({
      element: panel,
      duration: 300, // Match the CSS transition duration
      callback: () => {
        panel.style.visibility = "hidden";
      },
    });

    triggerElement.focus();

    // Clear events
    document.removeEventListener("keydown", handleEscapeKey);
    document.removeEventListener("click", handleOutsideClick);

    // Remove the focus trap
    if (removeFocusTrap) {
      removeFocusTrap();
      removeFocusTrap = null;
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closePanel();
    }
  };

  const handleOutsideClick = (event) => {
    if (!panel.contains(event.target) && !triggerElement.contains(event.target)) {
      closePanel();
    }
  };

  // Assign event listeners
  closeButtonElement.addEventListener("click", closePanel);
  triggerElement.addEventListener("click", togglePanel);
};
