// AKARU! Homepage - JavaScript
// Common utilities and event handlers

document.addEventListener('DOMContentLoaded', function() {
  // Form submission handler
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      handleFormSubmit();
    });
  }

  // Mobile navigation toggle (for future mobile menu implementation)
  initializeNavigation();

  // Smooth scroll for anchor links
  initializeSmoothScroll();
});

/**
 * Handle form submission with Formspree
 */
function handleFormSubmit() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const firstName = form.querySelector('input[name="firstName"]').value.trim();
  const lastName = form.querySelector('input[name="lastName"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const city = form.querySelector('select[name="city"]').value;
  const message = form.querySelector('textarea[name="message"]')?.value.trim() || '';

  // Basic validation
  if (!firstName || !lastName || !phone || !email) {
    alert('Please fill in all required fields');
    return;
  }

  // Email validation
  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Prepare form data for Formspree
  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('phone', phone);
  formData.append('email', email);
  formData.append('city', city);
  formData.append('message', message);

  // Submit to Formspree
  fetch('https://formspree.io/f/xqegagrl', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for your interest! We will contact you within 24 hours.');
      form.reset();
    } else {
      alert('There was an error submitting the form. Please try again.');
    }
  })
  .catch(error => {
    console.error('Form submission error:', error);
    alert('There was an error submitting the form. Please try again.');
  });
}

/**
 * Validate email format
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Initialize navigation (for future mobile menu enhancements)
 */
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Optionally close mobile menu if it exists
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    });
  });
}

/**
 * Enhance smooth scrolling behavior
 */
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // Add extra offset for fixed navbar
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Utility: Add active class to navigation based on scroll position
 */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const section_id = section.getAttribute('id');
    const navLink = document.querySelector(`a[href="#${section_id}"]`);

    if (!navLink) return;

    if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

// Call on scroll
window.addEventListener('scroll', updateActiveNavLink);
