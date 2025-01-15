// src/utils/navigationPanel.js
document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("modal-navigation");
  const links = panel.querySelectorAll("a");
  const closePanelButton = panel.querySelector(".modal-navigation-footer button");

  // Add a hidden focusable element before the first link
  const hiddenFocusElement = document.createElement("div");
  hiddenFocusElement.setAttribute("tabindex", "0");
  panel.prepend(hiddenFocusElement);

  // Add `Ctrl + M` keyboard shortcut
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "m") {
      e.preventDefault();
      panel.style.display = "block";
      hiddenFocusElement.focus();
    }
  });

  // Hover effect for links
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      const targetId = link.getAttribute("href").replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        targetElement.classList.add("hover");
        setTimeout(() => targetElement.classList.remove("hover"), 1000); // Remove highlight after 1s
      }
    });

    // Click or Enter to activate link
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activateLink(link);
    });

    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        activateLink(link);
      }
    });
  });

  // Close panel when "ESC" is pressed or button clicked
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePanel();
    }
  });

  closePanelButton.addEventListener("click", closePanel);

  // Helper: Activate Link
  const activateLink = (link) => {
    const targetId = link.getAttribute("href").replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.focus();
    }
    closePanel();
  };

  // Helper: Close Panel
  const closePanel = () => {
    panel.style.display = "none";
  };
});
