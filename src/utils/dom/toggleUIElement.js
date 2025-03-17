/*
 * This function toggles the visibility of a specified UI element (such as a panel or dropdown menu).
 * It manages ARIA attributes for accessibility, allows the element to be opened and closed,
 * and supports closing via the Escape key, clicking outside, or an optional close button.
 *
 * Features:
 * - Opens and closes the UI element on button click.
 * - Adds/removes a class to control visibility.
 * - Updates `aria-hidden` and `tabindex` for proper screen reader behavior.
 * - Moves focus to the panel when opened and back to the button when closed.
 * - Closes the panel when clicking outside or pressing the Escape key.
 *
 * Event Listeners:
 * - Click event on the toggle button to open/close the panel.
 * - Click event on an optional close button to close the panel.
 * - `keydown` event to close the panel when the Escape key is pressed.
 * - `click` event to detect outside clicks and close the panel.
 */

export const toggleUIElement = ({
  button,
  uiElement,
  toggleClass,
  closeButton,
  initialFocus,
}) => {
  const btn = document.getElementById(button);
  const uiEl = document.getElementById(uiElement);
  const closeBtn = closeButton ? document.getElementById(closeButton) : null;
  const focusTarget = initialFocus
    ? document.getElementById(initialFocus)
    : uiEl;

  if (!btn || !uiEl) return;

  const openPanel = () => {
    uiEl.setAttribute("aria-hidden", "false");
    uiEl.setAttribute("tabindex", "0");
    uiEl.classList.add(toggleClass);

    setTimeout(() => {
      if (focusTarget && typeof focusTarget.focus === "function") {
        focusTarget.focus();
      } else if (typeof uiEl.focus === "function") {
        uiEl.focus();
      }
    }, 50);

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClickOutsite);
  };

  const closePanel = () => {
    btn.focus();

    uiEl.setAttribute("aria-hidden", "true");
    uiEl.setAttribute("tabindex", "-1");
    uiEl.classList.remove(toggleClass);

    document.removeEventListener("keydown", handleEsc);
    document.removeEventListener("click", handleClickOutsite);
  };

  const toggleElement = () => {
    if (uiEl.getAttribute("aria-hidden") === "true") {
      openPanel();
    } else {
      closePanel();
    }
  };

  const handleEsc = (e) => {
    if (e.key === "Escape") closePanel();
  };

  const handleClickOutsite = (e) => {
    if (!uiEl.contains(e.target) && e.target !== btn) closePanel();
  };

  // adding events open and close button
  btn.addEventListener("click", toggleElement);
  if (closeBtn) closeBtn.addEventListener("click", closePanel);
};
