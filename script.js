// AKARUI! Homepage - JavaScript
// Common utilities and event handlers

document.addEventListener('DOMContentLoaded', function() {
  initializeContactForm();

  // Mobile navigation toggle (for future mobile menu implementation)
  initializeNavigation();

  // Smooth scroll for anchor links
  initializeSmoothScroll();
});

function translateText(key, fallback) {
  const i18n = window.AkaruiI18n;
  if (i18n && typeof i18n.t === 'function') {
    return i18n.t(key);
  }
  return fallback;
}

/**
 * Handle form submission with Formspree
 */
function initializeContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitBtn = form.querySelector('.submit-btn');
  const status = form.querySelector('.form-status');

  const firstName = form.querySelector('input[name="firstName"]').value.trim();
  const lastName = form.querySelector('input[name="lastName"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();

  if (!firstName || !lastName || !phone || !email) {
    updateFormStatus(status, translateText('form.status.required', 'Please fill in all required fields.'), 'error');
    form.reportValidity();
    return;
  }

  if (!validateEmail(email)) {
    updateFormStatus(status, translateText('form.status.invalidEmail', 'Please enter a valid email address.'), 'error');
    return;
  }

  const formData = new FormData(form);
  updateFormStatus(status, translateText('form.status.submitting', 'Submitting your enquiry...'), 'pending');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');
  }

  try {
    const response = await fetch(form.action, {
      method: form.method || 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      updateFormStatus(status, translateText('form.status.success', 'Thank you. Your enquiry has been sent and our team will contact you within 24 hours.'), 'success');
      return;
    }

    const errorData = await response.json().catch(() => null);
    const message = errorData && Array.isArray(errorData.errors) && errorData.errors.length
      ? errorData.errors.map((error) => error.message).join(' ')
      : translateText('form.status.error', 'There was an error submitting the form. Please try again.');

    updateFormStatus(status, message, 'error');
  } catch (error) {
    console.error('Form submission error:', error);
    updateFormStatus(status, translateText('form.status.error', 'There was an error submitting the form. Please try again.'), 'error');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('is-loading');
    }
  }
}

function updateFormStatus(statusElement, message, state) {
  if (!statusElement) return;

  statusElement.textContent = message;
  statusElement.classList.remove('is-error', 'is-success', 'is-pending');

  if (state === 'error') {
    statusElement.classList.add('is-error');
  } else if (state === 'success') {
    statusElement.classList.add('is-success');
  } else if (state === 'pending') {
    statusElement.classList.add('is-pending');
  }
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

/**
 * Gallery auto-slider with dot navigation
 */
function initGallerySlider() {
  const slides = document.querySelectorAll('.gallery-slide');
  const dots = document.querySelectorAll('.gallery-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startTimer() {
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopTimer();
      goTo(i);
      startTimer();
    });
  });

  const section = document.querySelector('.gallery-section');
  if (section) {
    section.addEventListener('mouseenter', stopTimer);
    section.addEventListener('mouseleave', startTimer);
  }

  startTimer();
}

document.addEventListener('DOMContentLoaded', initGallerySlider);

/**
 * Hero reel auto-slider
 */
function initHeroReel() {
  const slides = document.querySelectorAll('.hero-reel-slide');
  const dots = document.querySelectorAll('.reel-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startTimer() {
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopTimer();
      goTo(i);
      startTimer();
    });
  });

  const reel = document.querySelector('.hero-right');
  if (reel) {
    reel.addEventListener('mouseenter', stopTimer);
    reel.addEventListener('mouseleave', startTimer);
  }

  startTimer();
}

document.addEventListener('DOMContentLoaded', initHeroReel);

// Call on scroll
window.addEventListener('scroll', updateActiveNavLink);
