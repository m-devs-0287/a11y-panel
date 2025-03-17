export const handleDropdown = ({ button, menu, className }) => {
  const btnEl = document.getElementById(button);
  const menuEl = document.getElementById(menu);
  const liveRegion = document.getElementById("live-region");

  if (!btnEl || !menuEl || !liveRegion) {
    console.error("Dropdown elements not found");
    return;
  }

  const focusableItems = () => menuEl.querySelectorAll("a");

  const closeMenu = () => {
    btnEl.setAttribute("aria-expanded", "false");
    menuEl.classList.remove(className);
    liveRegion.textContent = "Menu collapsed.";
  };

  const toggleMenu = () => {
    const isClosed = btnEl.getAttribute("aria-expanded") === "false";

    if (isClosed) {
      btnEl.setAttribute("aria-expanded", "true");
      menuEl.classList.add(className);

      setTimeout(() => {
        const selectedLang = menuEl.querySelector(".gt-current-lang");
        const firstFocusableEl = focusableItems()[0];

        if (selectedLang) {
          selectedLang.focus();
        } else if (firstFocusableEl) {
          firstFocusableEl.focus();
        }
      }, 50);

      liveRegion.textContent = "Menu expanded. Use arrow keys to navigate.";
    } else {
      closeMenu();
    }
  };

  const handleFocusOut = (event) => {
    setTimeout(() => {
      const focusedElement = document.activeElement;
      if (!menuEl.contains(focusedElement) && !btnEl.contains(focusedElement)) {
        closeMenu();
      }
    }, 100);
  };

  const handleMenuItemActivation = (event) => {
    const menuItem = event.target.closest("a");
    if (!menuItem) return;

    if (event.key === " ") {
      event.preventDefault();
      menuItem.click();
    }

    if (event.type === "click" || event.key === "Enter") {
      setTimeout(() => {
        closeMenu();
        btnEl.focus();
      }, 100);
    }
  };

  document.addEventListener("focusin", handleFocusOut);
  menuEl.addEventListener("click", handleMenuItemActivation);
  btnEl.addEventListener("click", toggleMenu);
};
