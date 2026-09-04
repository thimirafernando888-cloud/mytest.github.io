// Function to check element positions and trigger scroll animations
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

// Attach listeners for scrolling and page load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
