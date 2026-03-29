document.addEventListener("DOMContentLoaded", () => {

  // ─── LOAD GALLERY DATA FROM ADMIN ───
  loadGalleryData();

  function loadGalleryData() {
    try {
      const raw = localStorage.getItem('akaru_gallery_admin_data');
      if (!raw) {
        showEmptyState();
        return;
      }
      const data = JSON.parse(raw);
      if (!data.sections || data.sections.length === 0) {
        showEmptyState();
        return;
      }
      renderAdminPhotos(data.sections);
    } catch {
      showEmptyState();
    }
  }

  function showEmptyState() {
    const coeGrid = document.getElementById('coeGrid');
    const activitiesGrid = document.getElementById('activitiesGrid');
    if (coeGrid) {
      coeGrid.innerHTML = '<div class="gallery-item"><div class="gallery-image">📑</div><div class="gallery-content"><span class="gallery-label">COE</span><h3 class="gallery-title">Coming Soon</h3><p class="gallery-desc">COE documents will be added here soon.</p></div></div>';
    }
    if (activitiesGrid) {
      activitiesGrid.innerHTML = '<div class="gallery-item"><div class="gallery-image">🎓</div><div class="gallery-content"><span class="gallery-label">Activity</span><h3 class="gallery-title">Coming Soon</h3><p class="gallery-desc">Student activities will be added here soon.</p></div></div>';
    }
    animateCards();
  }

  function renderAdminPhotos(sections) {
    const coeGrid = document.getElementById('coeGrid');
    const activitiesGrid = document.getElementById('activitiesGrid');
    const dynamicSections = document.getElementById('dynamicSections');

    const coeSections = sections.filter(s => s.type === 'coe');
    const activitySections = sections.filter(s => s.type === 'activity');
    const otherSections = sections.filter(s => s.type !== 'coe' && s.type !== 'activity');

    // Render COE photos
    if (coeGrid) {
      const coePhotos = coeSections.flatMap(s => (s.photos || []).map(p => ({ ...p, sectionName: s.name })));
      if (coePhotos.length > 0) {
        coeGrid.innerHTML = coePhotos.map(photo =>
          '<div class="gallery-item gallery-item-photo">' +
            '<div class="gallery-image"><img src="' + escapeAttr(photo.data) + '" alt="' + escapeAttr(photo.name) + '" loading="lazy"></div>' +
            '<div class="gallery-content">' +
              '<span class="gallery-label">COE</span>' +
              '<h3 class="gallery-title">' + escapeHtml(photo.sectionName) + '</h3>' +
              '<p class="gallery-desc">' + escapeHtml(photo.name) + '</p>' +
            '</div>' +
          '</div>'
        ).join('');
      } else {
        coeGrid.innerHTML = '<div class="gallery-item"><div class="gallery-image">📑</div><div class="gallery-content"><span class="gallery-label">COE</span><h3 class="gallery-title">Coming Soon</h3><p class="gallery-desc">COE documents will be added here soon.</p></div></div>';
      }
    }

    // Render Activity photos
    if (activitiesGrid) {
      const actPhotos = activitySections.flatMap(s => (s.photos || []).map(p => ({ ...p, sectionName: s.name })));
      if (actPhotos.length > 0) {
        activitiesGrid.innerHTML = actPhotos.map(photo =>
          '<div class="gallery-item gallery-item-photo">' +
            '<div class="gallery-image"><img src="' + escapeAttr(photo.data) + '" alt="' + escapeAttr(photo.name) + '" loading="lazy"></div>' +
            '<div class="gallery-content">' +
              '<span class="gallery-label">Activity</span>' +
              '<h3 class="gallery-title">' + escapeHtml(photo.sectionName) + '</h3>' +
              '<p class="gallery-desc">' + escapeHtml(photo.name) + '</p>' +
            '</div>' +
          '</div>'
        ).join('');
      } else {
        activitiesGrid.innerHTML = '<div class="gallery-item"><div class="gallery-image">🎓</div><div class="gallery-content"><span class="gallery-label">Activity</span><h3 class="gallery-title">Coming Soon</h3><p class="gallery-desc">Student activities will be added here soon.</p></div></div>';
      }
    }

    // Render other sections dynamically
    if (dynamicSections && otherSections.length > 0) {
      dynamicSections.innerHTML = otherSections.map(section => {
        const typeLabels = { achievement: 'Achievement', other: 'Other' };
        const label = typeLabels[section.type] || 'Other';
        const photos = section.photos || [];
        const photosHtml = photos.length > 0
          ? photos.map(photo =>
              '<div class="gallery-item gallery-item-photo">' +
                '<div class="gallery-image"><img src="' + escapeAttr(photo.data) + '" alt="' + escapeAttr(photo.name) + '" loading="lazy"></div>' +
                '<div class="gallery-content">' +
                  '<span class="gallery-label">' + escapeHtml(label) + '</span>' +
                  '<h3 class="gallery-title">' + escapeHtml(section.name) + '</h3>' +
                  '<p class="gallery-desc">' + escapeHtml(photo.name) + '</p>' +
                '</div>' +
              '</div>'
            ).join('')
          : '<div class="gallery-item"><div class="gallery-image">📂</div><div class="gallery-content"><span class="gallery-label">' + escapeHtml(label) + '</span><h3 class="gallery-title">' + escapeHtml(section.name) + '</h3><p class="gallery-desc">Photos coming soon.</p></div></div>';

        return '<section class="activities-section">' +
          '<span class="section-tag">' + escapeHtml(label) + '</span>' +
          '<h2 class="section-title">' + escapeHtml(section.name) + '</h2>' +
          '<div class="gallery-grid">' + photosHtml + '</div>' +
        '</section>';
      }).join('');
    }

    animateCards();
  }

  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function animateCards() {
    const cards = document.querySelectorAll(".gallery-item");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(12px)";
      card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 120 * index);
    });
  }

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
    document.body.classList.remove('nav-menu-open');
  }

  if (burger && navLinksContainer) {
    burger.addEventListener('click', function() {
      const isOpen = navLinksContainer.classList.toggle('open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        overlay.classList.add('active');
        document.body.classList.add('nav-menu-open');
      } else {
        overlay.classList.remove('active');
        document.body.classList.remove('nav-menu-open');
      }
    });

    overlay.addEventListener('click', closeNavMenu);

    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        closeNavMenu();
      }
    });

    window.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeNavMenu();
      }
    });

    nav.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', closeNavMenu);
    });
  }
});
