(function () {
  'use strict';

  // ─── CONFIG ───
  var ADMIN_USER = 'admin';
  var ADMIN_PASS = 'akarui2026';

  var STORAGE_KEY = 'akaru_gallery_admin_data';
  var SESSION_KEY = 'akaru_admin_session';
  var MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB per image

  // ─── DATA LAYER ───
  function loadData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { sections: [] };
    } catch (e) {
      return { sections: [] };
    }
  }

  function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // ─── TOAST ───
  function showToast(message, type) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(function () { if (toast.parentNode) toast.remove(); }, 3000);
  }

  // ─── ESCAPE HTML ───
  function escapeHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ─── WAIT FOR DOM ───
  document.addEventListener('DOMContentLoaded', function () {
    var loginScreen = document.getElementById('loginScreen');
    var adminPanel = document.getElementById('adminPanel');
    var loginForm = document.getElementById('loginForm');
    var loginError = document.getElementById('loginError');
    var logoutBtn = document.getElementById('logoutBtn');

    // Check existing session
    if (sessionStorage.getItem(SESSION_KEY) === 'authenticated') {
      loginScreen.hidden = true;
      adminPanel.hidden = false;
      initAdmin();
    }

    // ─── LOGIN ───
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var user = document.getElementById('adminUser').value.trim();
      var pass = document.getElementById('adminPass').value;

      if (user === ADMIN_USER && pass === ADMIN_PASS) {
        sessionStorage.setItem(SESSION_KEY, 'authenticated');
        loginScreen.hidden = true;
        adminPanel.hidden = false;
        loginError.hidden = true;
        showToast('Welcome, Admin!', 'success');
        initAdmin();
      } else {
        loginError.hidden = false;
        document.getElementById('adminPass').value = '';
      }
    });

    // ─── LOGOUT ───
    logoutBtn.addEventListener('click', function () {
      sessionStorage.removeItem(SESSION_KEY);
      adminPanel.hidden = true;
      loginScreen.hidden = false;
      document.getElementById('adminUser').value = '';
      document.getElementById('adminPass').value = '';
      loginError.hidden = true;
    });
  });

  // ─── ADMIN PANEL ───
  function initAdmin() {
    var sectionsContainer = document.getElementById('sectionsContainer');
    var uploadModal = document.getElementById('uploadModal');
    var fileInput = document.getElementById('fileInput');
    var uploadPreview = document.getElementById('uploadPreview');
    var uploadSectionLabel = document.getElementById('uploadSectionLabel');
    var dropZone = document.getElementById('dropZone');

    var currentUploadSectionId = null;
    var pendingFiles = [];

    renderSections();

    // ─── ADD SECTION ───
    document.getElementById('addSectionBtn').addEventListener('click', function () {
      var nameInput = document.getElementById('sectionName');
      var typeSelect = document.getElementById('sectionType');
      var name = nameInput.value.trim();
      if (!name) {
        showToast('Please enter a section name.', 'error');
        nameInput.focus();
        return;
      }

      var data = loadData();
      data.sections.push({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name,
        type: typeSelect.value,
        photos: [],
        createdAt: new Date().toISOString()
      });
      saveData(data);
      nameInput.value = '';
      renderSections();
      showToast('Section "' + name + '" created!', 'success');
    });

    // ─── RENDER SECTIONS ───
    function renderSections() {
      var data = loadData();
      if (data.sections.length === 0) {
        sectionsContainer.innerHTML =
          '<div class="admin-card"><div class="empty-photos"><div class="empty-icon">📂</div><p>No sections yet. Create one above to get started.</p></div></div>';
        return;
      }

      sectionsContainer.innerHTML = data.sections.map(function (section) {
        var badgeClass = 'badge-' + section.type;
        var typeLabels = { coe: 'COE', activity: 'Activity', achievement: 'Achievement', other: 'Other' };
        var typeLabel = typeLabels[section.type] || 'Other';
        var photoCount = section.photos ? section.photos.length : 0;

        var photosHtml;
        if (photoCount > 0) {
          photosHtml = '<div class="photo-grid">' + section.photos.map(function (photo, idx) {
            var tagHtml = photo.tag ? '<div class="photo-tag">' + escapeHtml(photo.tag) + '</div>' : '';
            var captionHtml = '<div class="photo-caption">' + escapeHtml(photo.name) + '</div>';
            var descHtml = photo.description ? '<p class="photo-desc">' + escapeHtml(photo.description) + '</p>' : '';

            return '<div class="photo-card">' +
              '<img src="' + escapeHtml(photo.data) + '" alt="' + escapeHtml(photo.name) + '" loading="lazy">' +
              '<button class="photo-remove" data-section="' + section.id + '" data-index="' + idx + '" title="Remove photo">&times;</button>' +
              tagHtml +
              captionHtml +
            '</div>' + descHtml;
          }).join('') + '</div>';
        } else {
          photosHtml = '<div class="empty-photos"><div class="empty-icon">🖼️</div><p>No photos yet. Click "Upload Photos" to add some.</p></div>';
        }

        return '<div class="section-card">' +
          '<div class="section-header">' +
            '<div class="section-header-left">' +
              '<span class="section-type-badge ' + badgeClass + '">' + typeLabel + '</span>' +
              '<h3>' + escapeHtml(section.name) + '</h3>' +
              '<span class="photo-count">' + photoCount + ' photo' + (photoCount !== 1 ? 's' : '') + '</span>' +
            '</div>' +
            '<div class="section-actions">' +
              '<button class="btn-primary btn-small upload-photos-btn" data-id="' + section.id + '">📷 Upload Photos</button>' +
              '<button class="btn-danger btn-small delete-section-btn" data-id="' + section.id + '" data-name="' + escapeHtml(section.name) + '">🗑 Delete</button>' +
            '</div>' +
          '</div>' +
          '<div class="section-body">' + photosHtml + '</div>' +
        '</div>';
      }).join('');

      // Bind upload buttons
      sectionsContainer.querySelectorAll('.upload-photos-btn').forEach(function (btn) {
        btn.addEventListener('click', function () { openUploadModal(btn.dataset.id); });
      });

      // Bind delete section buttons
      sectionsContainer.querySelectorAll('.delete-section-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (confirm('Delete section "' + btn.dataset.name + '" and all its photos?')) {
            var d = loadData();
            d.sections = d.sections.filter(function (s) { return s.id !== btn.dataset.id; });
            saveData(d);
            renderSections();
            showToast('Section deleted.', 'info');
          }
        });
      });

      // Bind photo remove buttons
      sectionsContainer.querySelectorAll('.photo-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var sectionId = btn.dataset.section;
          var index = parseInt(btn.dataset.index, 10);
          var d = loadData();
          var sec = d.sections.find(function (s) { return s.id === sectionId; });
          if (sec && sec.photos[index]) {
            var photoName = sec.photos[index].name;
            sec.photos.splice(index, 1);
            saveData(d);
            renderSections();
            showToast('Photo "' + photoName + '" removed.', 'info');
          }
        });
      });
    }

    // ─── UPLOAD MODAL ───
    function openUploadModal(sectionId) {
      currentUploadSectionId = sectionId;
      pendingFiles = [];
      uploadPreview.innerHTML = '';
      document.getElementById('photoTag').value = '';
      document.getElementById('photoDesc').value = '';

      var data = loadData();
      var section = data.sections.find(function (s) { return s.id === sectionId; });
      uploadSectionLabel.textContent = 'Uploading to: ' + (section ? section.name : 'Unknown');
      uploadModal.hidden = false;
    }

    function closeUploadModal() {
      uploadModal.hidden = true;
      currentUploadSectionId = null;
      pendingFiles = [];
      uploadPreview.innerHTML = '';
      fileInput.value = '';
      document.getElementById('photoTag').value = '';
      document.getElementById('photoDesc').value = '';
    }

    document.getElementById('closeModal').addEventListener('click', closeUploadModal);
    document.getElementById('cancelUpload').addEventListener('click', closeUploadModal);
    uploadModal.addEventListener('click', function (e) {
      if (e.target === uploadModal) closeUploadModal();
    });

    // Drop zone
    dropZone.addEventListener('click', function () { fileInput.click(); });
    dropZone.addEventListener('dragover', function (e) { e.preventDefault(); dropZone.classList.add('drag-over'); });
    dropZone.addEventListener('dragleave', function () { dropZone.classList.remove('drag-over'); });
    dropZone.addEventListener('drop', function (e) {
      e.preventDefault();
      dropZone.classList.remove('drag-over');
      handleFiles(e.dataTransfer.files);
    });
    fileInput.addEventListener('change', function () {
      handleFiles(fileInput.files);
      fileInput.value = '';
    });

    function handleFiles(fileList) {
      for (var i = 0; i < fileList.length; i++) {
        (function (file) {
          if (!file.type.startsWith('image/')) {
            showToast('"' + file.name + '" is not an image.', 'error');
            return;
          }
          if (file.size > MAX_IMAGE_SIZE) {
            showToast('"' + file.name + '" exceeds 2MB limit.', 'error');
            return;
          }
          var reader = new FileReader();
          reader.onload = function (e) {
            pendingFiles.push({ name: file.name, data: e.target.result });
            renderPreview();
          };
          reader.readAsDataURL(file);
        })(fileList[i]);
      }
    }

    function renderPreview() {
      uploadPreview.innerHTML = pendingFiles.map(function (f, idx) {
        return '<div class="preview-item">' +
          '<img src="' + f.data + '" alt="' + escapeHtml(f.name) + '">' +
          '<button class="preview-remove" data-idx="' + idx + '">&times;</button>' +
        '</div>';
      }).join('');

      uploadPreview.querySelectorAll('.preview-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          pendingFiles.splice(parseInt(btn.dataset.idx, 10), 1);
          renderPreview();
        });
      });
    }

    // Confirm upload
    document.getElementById('confirmUpload').addEventListener('click', function () {
      if (pendingFiles.length === 0) {
        showToast('No photos selected.', 'error');
        return;
      }

      var tag = document.getElementById('photoTag').value.trim();
      var description = document.getElementById('photoDesc').value.trim();

      var data = loadData();
      var section = data.sections.find(function (s) { return s.id === currentUploadSectionId; });
      if (!section) {
        showToast('Section not found.', 'error');
        closeUploadModal();
        return;
      }
      if (!section.photos) section.photos = [];

      pendingFiles.forEach(function (file) {
        section.photos.push({
          name: file.name,
          data: file.data,
          tag: tag,
          description: description,
          uploadedAt: new Date().toISOString()
        });
      });

      try {
        saveData(data);
        showToast(pendingFiles.length + ' photo(s) uploaded!', 'success');
        closeUploadModal();
        renderSections();
      } catch (e) {
        if (e.name === 'QuotaExceededError') {
          showToast('Storage full! Try smaller images or clear old data.', 'error');
        } else {
          showToast('Upload failed: ' + e.message, 'error');
        }
      }
    });

    // ─── EXPORT ───
    document.getElementById('exportBtn').addEventListener('click', function () {
      var data = loadData();
      var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'akarui-gallery-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Data exported!', 'success');
    });

    // ─── IMPORT ───
    var importFile = document.getElementById('importFile');
    document.getElementById('importBtn').addEventListener('click', function () { importFile.click(); });
    importFile.addEventListener('change', function () {
      var file = importFile.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (e) {
        try {
          var imported = JSON.parse(e.target.result);
          if (!imported.sections || !Array.isArray(imported.sections)) {
            showToast('Invalid data file.', 'error');
            return;
          }
          if (confirm('This will replace all current gallery data. Continue?')) {
            saveData(imported);
            renderSections();
            showToast('Data imported! (' + imported.sections.length + ' sections)', 'success');
          }
        } catch (err) {
          showToast('Failed to parse import file.', 'error');
        }
      };
      reader.readAsText(file);
      importFile.value = '';
    });

    // ─── CLEAR ALL ───
    document.getElementById('clearAllBtn').addEventListener('click', function () {
      if (confirm('Delete ALL gallery data? This cannot be undone.')) {
        saveData({ sections: [] });
        renderSections();
        showToast('All data cleared.', 'info');
      }
    });
  }

})();
