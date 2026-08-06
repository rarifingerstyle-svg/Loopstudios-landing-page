/**
 * Loopstudios Mobile Navigation Toggle
 */
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-navigation');

  if (!navToggle || !primaryNav) return;

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

    // Toggle ARIA attribute
    navToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle Data attribute for CSS slide transition
    if (isExpanded) {
      primaryNav.removeAttribute('data-visible');
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    } else {
      primaryNav.setAttribute('data-visible', '');
      document.body.style.overflow = 'hidden'; // Lock scrolling when menu is open
    }
  });

  // Close menu on pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav.hasAttribute('data-visible')) {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNav.removeAttribute('data-visible');
      document.body.style.overflow = 'auto';
    }
  });
});