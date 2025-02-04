export const initMagnifier = () => {
  const magnifier = document.getElementById('magnifier');
  const viewport = document.getElementById('viewport');

  // Function to dynamically clone the live page (excluding the magnifier)
  function contentClone() {
    viewport.innerHTML = ''; // Clear previous content
    const contentToClone = [...document.body.children].filter(child => !child.classList.contains('magnifier'));
    contentToClone.forEach(element => {
      viewport.appendChild(element.cloneNode(true));
    });
  }

  // Initial content clone
  contentClone();

  // Handle mouse movement over the page
  document.addEventListener('mousemove', (event) => {
    const mouseX = event.pageX;  // Use pageX to account for scrolling
    const mouseY = event.pageY;  // Use pageY to account for scrolling

    // Position the magnifier around the cursor
    magnifier.style.left = `${mouseX}px`;
    magnifier.style.top = `${mouseY}px`;

    // Adjust the viewport offset for zoom
    const offsetX = -(mouseX * 2 - magnifier.offsetWidth / 2);
    const offsetY = -(mouseY * 2 - magnifier.offsetHeight / 2);

    viewport.style.left = `${offsetX}px`;
    viewport.style.top = `${offsetY}px`;
  });
};
