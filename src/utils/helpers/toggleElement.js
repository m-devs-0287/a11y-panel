function toggleElement({ triggerId, targetId, focusFirst = false }) {
  const trigger = document.getElementById(triggerId);
  const target = document.getElementById(targetId);

  if (!trigger || !target) {
    console.error("Invalid trigger or target element IDs.");
    return;
  }

  trigger.addEventListener("click", () => {
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", !isExpanded);
    target.setAttribute("aria-hidden", isExpanded);

    if (!isExpanded && focusFirst) {
      // Move focus to the first focusable element in the target
      const firstFocusable = target.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (firstFocusable) firstFocusable.focus();
    } else {
      // Return focus to the trigger
      trigger.focus();
    }
  });
}
