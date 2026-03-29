// AKARUI! Homepage - JavaScript
// Common utilities and event handlers

document.addEventListener('DOMContentLoaded', function() {
  initializeContactForm();

  // Mobile navigation toggle (for future mobile menu implementation)
  initializeNavigation();

  // Smooth scroll for anchor links
  initializeSmoothScroll();

  // Decorative Japanese glyphs across the site
  initializeSiteGlyphs();
});

function initializeSiteGlyphs() {
  const glyphs = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ホ', 'ミ', 'ラ', 'リ', 'ル', '日', '月', '火', '水', '木', '金', '土', '山', '川', '田', '人', '口', '学', '生', '先', '私', '年', '時', '本', '夢'];
  const targets = document.querySelectorAll('nav, section:not(.hero), footer, .marquee-strip');

  targets.forEach((target, targetIndex) => {
    if (target.querySelector('.jp-glyph-layer')) return;

    const layer = document.createElement('div');
    layer.className = 'jp-glyph-layer';
    layer.setAttribute('aria-hidden', 'true');

    const glyphCount = target.matches('nav, footer, .marquee-strip') ? 8 : 14;

    for (let index = 0; index < glyphCount; index += 1) {
      const glyph = document.createElement('span');
      const charIndex = (targetIndex * 7 + index * 5) % glyphs.length;
      glyph.className = `jp-glyph${index % 3 === 1 ? ' red' : ''}${index % 4 === 0 ? ' soft' : ''}`;
      glyph.textContent = glyphs[charIndex];
      glyph.style.left = `${6 + ((index * 11 + targetIndex * 7) % 84)}%`;
      glyph.style.top = `${8 + ((index * 13 + targetIndex * 9) % 78)}%`;
      glyph.style.setProperty('--size', `${1.15 + ((index + targetIndex) % 5) * 0.45}rem`);
      glyph.style.setProperty('--duration', `${15 + ((index + targetIndex) % 7) * 1.8}s`);
      glyph.style.setProperty('--delay', `${-1 * ((index * 1.3) % 8)}s`);
      glyph.style.setProperty('--rotate', `${((index % 6) - 3) * 4}deg`);
      glyph.style.setProperty('--drift-x', `${index % 2 === 0 ? 12 + (index % 4) * 4 : -12 - (index % 4) * 4}px`);
      glyph.style.setProperty('--drift-y', `${-14 - (index % 5) * 5}px`);
      layer.appendChild(glyph);
    }

    target.prepend(layer);
  });
}

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
  const nav = document.querySelector('nav');
  const navLinksContainer = nav ? nav.querySelector('.nav-links') : null;
  const burger = nav ? nav.querySelector('.nav-burger') : null;

  function closeNavMenu() {
    if (!navLinksContainer || !burger) return;
    navLinksContainer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger && navLinksContainer) {
    burger.addEventListener('click', function() {
      const isOpen = navLinksContainer.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target)) {
        closeNavMenu();
      }
    });

    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        closeNavMenu();
      }
    });
  }

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeNavMenu();
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
  const photoSlides = document.querySelectorAll('.hero-photo-slide');
  const photoDots = document.querySelectorAll('.hero-photo-dot');
  const reelSlides = document.querySelectorAll('.hero-reel-slide');
  const reelDots = document.querySelectorAll('.reel-dot');

  const isPhotoFrame = photoSlides.length && photoDots.length;
  const slides = isPhotoFrame ? photoSlides : reelSlides;
  const dots = isPhotoFrame ? photoDots : reelDots;
  if (!slides.length || !dots.length) return;

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
    timer = setInterval(() => goTo(current + 1), isPhotoFrame ? 3800 : 5000);
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

  const sliderSurface = document.querySelector(isPhotoFrame ? '.hero-photo-frame' : '.hero-right');
  if (sliderSurface) {
    sliderSurface.addEventListener('mouseenter', stopTimer);
    sliderSurface.addEventListener('mouseleave', startTimer);
  }

  startTimer();
}

document.addEventListener('DOMContentLoaded', initHeroReel);

// Call on scroll
window.addEventListener('scroll', updateActiveNavLink);
