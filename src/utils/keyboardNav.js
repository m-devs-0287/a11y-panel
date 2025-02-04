// Generate dynamic navigation links
const generateDynamicNavigationLinks = (ids) => {
  return ids
    .filter(id => document.getElementById(id))
    .map(id => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.textContent = id.charAt(0).toUpperCase() + id.slice(1);
      a.dataset.targetId = id;
      li.appendChild(a);
      return li;
    });
};

// Trap focus within modal
const trapFocus = (event, focusableElements) => {
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey) {
      // Shift + Tab: If on the first element, loop back to the last
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: If on the last element, loop back to the first
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }
};

// Open modal
const openModal = (modal, focusTrapHandler) => {
  modal.classList.add("active");
  document.addEventListener("keydown", focusTrapHandler);
};

// Close modal
const closeModal = (modal, focusTrapHandler) => {
  modal.classList.remove("active");
  document.removeEventListener("keydown", focusTrapHandler);
};

// Handle outside click
const outsideClickHandler = (event, modal, closeModalCallback) => {
  if (!modal.contains(event.target)) {
    closeModalCallback();
  }
};

// Initialize keyboard navigation
export const initKeyboardNav = () => {
  const idsToInclude = ["header", "aside", "footer"];
  const dynamicLinks = generateDynamicNavigationLinks(idsToInclude);

  const navigationList = document.getElementById("navigation-list");
  const modal = document.getElementById("modal-navigation");
  const closeModalButton = document.getElementById("close-modal");

  dynamicLinks.forEach(link => navigationList.appendChild(link));

  const focusableElements = [...navigationList.querySelectorAll("a"), closeModalButton];

  const handleFocusTrap = (event) => {
    trapFocus(event, focusableElements);
  };

  const handleOpenModal = () => openModal(modal, handleFocusTrap);
  const handleCloseModal = () => closeModal(modal, handleFocusTrap);

  // Event listeners for keyboard interactions
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") handleCloseModal();
    if (event.ctrlKey && event.key === "m") handleOpenModal(); // Ctrl + M to toggle modal
  });

  closeModalButton.addEventListener("click", handleCloseModal);
  document.addEventListener("click", (event) => outsideClickHandler(event, modal, handleCloseModal));
};
