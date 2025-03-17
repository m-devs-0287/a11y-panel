export const switchButtonsAccessibilityEnhancements = () => {
  const switchesList = document.querySelectorAll(".toggle-switch input");

  switchesList.forEach((switchEl) => {
    const switchText =
      switchEl
        .closest("label")
        ?.querySelector(".switch-text")
        ?.textContent.trim() || "Switch";

    switchEl.addEventListener("change", (e) => {
      e.target.setAttribute("aria-checked", e.target.checked);
      switchEl.setAttribute(
        "aria-label",
        `${switchText} is ${switchEl.checked ? "On" : "Off"}`
      );
    });
  });
}
