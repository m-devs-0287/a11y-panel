let tooltip = null;

const createTooltip = (content) => {
  if (tooltip) return;

  tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = content;
  document.body.appendChild(tooltip);
};

const positionTooltip = (mouseX, mouseY) => {
  if (!tooltip) return;

  const tooltipRect = tooltip.getBoundingClientRect();

  let top = mouseY + 10;
  let left = mouseX + 10;

  if (top + tooltipRect.height > window.innerHeight) {
    top = mouseY - tooltipRect.height - 10;
  }
  if (left + tooltipRect.width > window.innerWidth) {
    left = mouseX - tooltipRect.width - 10;
  }

  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
};

const showTooltip = (event) => {
  if (!document.body.classList.contains("show-tooltips")) return;

  const target = event.target.closest("[data-tooltip]");
  if (!target) return;

  const content = target.getAttribute("data-tooltip");
  if (!content) return;

  createTooltip(content);
  positionTooltip(event.pageX, event.pageY);
};

const hideTooltip = (event) => {
  const target = event.target.closest("[data-tooltip]");
  if (target && tooltip) {
    tooltip.remove();
    tooltip = null;
  }
};

const initializeTooltips = () => {
  document.addEventListener("mouseover", showTooltip);
  document.addEventListener("mousemove", (event) => {
    if (tooltip) positionTooltip(event.pageX, event.pageY);
  });
  document.addEventListener("mouseout", hideTooltip);
};

// Export a single function to initialize tooltips
export default initializeTooltips;
