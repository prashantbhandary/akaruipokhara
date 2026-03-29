document.addEventListener("DOMContentLoaded", () => {
  // Animate team cards on load
  const cards = document.querySelectorAll(".team-card, .ceo-card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(16px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 150 * index);
  });

  // Burger menu toggle with overlay
  const nav = document.querySelector('nav');
  const navLinksContainer = nav ? nav.querySelector('.nav-links') : null;
  const burger = nav ? nav.querySelector('.nav-burger') : null;

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function closeNavMenu() {
    if (!navLinksContainer || !burger) return;
    navLinksContainer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    overlay.classList.remove('active');
  }

  if (burger && navLinksContainer) {
    burger.addEventListener('click', function() {
      const isOpen = navLinksContainer.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    });

    overlay.addEventListener('click', closeNavMenu);

    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        closeNavMenu();
      }
    });

    nav.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', closeNavMenu);
    });
  }
});
