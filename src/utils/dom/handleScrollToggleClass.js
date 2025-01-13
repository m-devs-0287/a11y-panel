export const handleScrollToggleClass = (scrollElementSelector, className, targetElementSelector = null) => {
  const scrollElement = document.querySelector(scrollElementSelector);
  const targetElement = targetElementSelector
    ? document.querySelector(targetElementSelector)
    : scrollElement;

  // Validate the scroll and target elements
  if (!scrollElement) {
    console.error(`Scrolling element with selector "${scrollElementSelector}" not found.`);
    return;
  }

  if (!targetElement) {
    console.error(`Target element with selector "${targetElementSelector}" not found.`);
    return;
  }

  const toggleClass = () => {
    const isAtBottom =
      Math.abs(scrollElement.scrollHeight - scrollElement.scrollTop - scrollElement.clientHeight) <= 1;

    if (isAtBottom) {
      targetElement.classList.remove(className);
      console.log(`Class "${className}" removed from`, targetElement);
    } else {
      targetElement.classList.add(className);
      console.log(`Class "${className}" added to`, targetElement);
    }
  };

  // Add scroll event listener
  scrollElement.addEventListener("scroll", toggleClass);

  // Initial check
  toggleClass();
};
