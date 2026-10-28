/**
 * VISIONA Official Public Website
 * Lightweight Interactive Controller (Zero External Dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-active');
    });

    // Close menu when clicking outside or clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Dynamic Copyright Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 3. Official Release & Download Manager (GitHub Releases Distribution Structure)
  const VISIONA_RELEASE_CONFIG = {
    // Akun dan repositori GitHub resmi
    githubOwner: 'Chaxyzzz', 
    githubRepo: 'Visiona',
    releaseTag: 'v1.0.0',
    // Status rilis daring resmi
    isPublished: true,
    platforms: {
      winSetup: {
        id: 'btn-download-setup',
        platformName: 'Windows',
        title: 'Download VISIONA',
        fileName: 'VISIONA-Setup.exe',
        fileSizeText: 'Tersedia (98,6 MB)',
        isLocalReady: true,
        desc: 'Paket installer mandiri (NSIS) untuk Windows 10/11 telah selesai dibangun dan teruji secara lokal. Tautan unduhan langsung aktif melalui GitHub Releases resmi.'
      },
      winPortable: {
        id: 'btn-download-portable',
        platformName: 'Windows',
        title: 'Download VISIONA Portable',
        fileName: 'VISIONA-Portable.exe',
        fileSizeText: 'Tersedia (95,2 MB)',
        isLocalReady: true,
        desc: 'Aplikasi portabel mandiri untuk Windows 10/11 (tanpa instalasi) telah selesai dibangun dan teruji secara lokal. Tautan unduhan langsung aktif melalui GitHub Releases resmi.'
      },
      macDmg: {
        id: 'btn-status-mac',
        platformName: 'macOS',
        title: 'VISIONA for macOS',
        fileName: '',
        fileSizeText: 'Dalam Persiapan',
        isLocalReady: false,
        desc: 'Paket distribusi macOS (.dmg) untuk arsitektur Intel dan Apple Silicon sedang dalam tahap persiapan dan belum tersedia untuk diunduh.'
      }
    },
    getReleaseUrl(platformKey) {
      const config = this.platforms[platformKey];
      if (!config || !config.isLocalReady || !this.isPublished || !this.githubOwner || !this.githubRepo) {
        return null;
      }
      return `https://github.com/${this.githubOwner}/${this.githubRepo}/releases/download/${this.releaseTag}/${config.fileName}`;
    }
  };

  const modal = document.getElementById('download-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalFilenameTag = document.getElementById('modal-filename-tag');
  const modalLocalStatus = document.getElementById('modal-local-status');
  const modalOnlineStatus = document.getElementById('modal-online-status');
  const modalDesc = document.getElementById('modal-desc');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openDownloadModal(platformKey) {
    if (!modal) return;
    const config = VISIONA_RELEASE_CONFIG.platforms[platformKey] || VISIONA_RELEASE_CONFIG.platforms.winSetup;
    
    if (modalTitle) modalTitle.textContent = config.title;
    if (modalFilenameTag) {
      if (config.fileName) {
        modalFilenameTag.textContent = config.fileName;
        modalFilenameTag.style.display = 'inline-block';
      } else {
        modalFilenameTag.textContent = '';
        modalFilenameTag.style.display = 'none';
      }
    }
    if (modalLocalStatus) {
      modalLocalStatus.textContent = config.fileSizeText;
      modalLocalStatus.className = 'modal-status-val ' + (config.isLocalReady ? 'text-success' : 'text-muted');
    }
    if (modalOnlineStatus) {
      const isOnline = Boolean(VISIONA_RELEASE_CONFIG.isPublished && config.isLocalReady);
      modalOnlineStatus.textContent = isOnline ? 'Aktif di GitHub Releases' : 'Dalam Persiapan';
      modalOnlineStatus.className = 'modal-status-val ' + (isOnline ? 'text-success' : 'text-pending');
    }
    if (modalDesc) modalDesc.textContent = config.desc;

    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeDownloadModal() {
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeDownloadModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDownloadModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeDownloadModal();
      }
    });
  }

  // Handle all download/status buttons
  const actionBtns = document.querySelectorAll('.download-action-btn');
  actionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const platformKey = btn.getAttribute('data-platform') || 'winSetup';
      const releaseUrl = VISIONA_RELEASE_CONFIG.getReleaseUrl(platformKey);

      // Jika belum siap (seperti macOS), tampilkan modal penjelasan transparan
      if (!releaseUrl) {
        e.preventDefault();
        openDownloadModal(platformKey);
      }
      // Jika tautan rilis valid tersedia (Windows installer & portabel), navigasi dilanjutkan
    });
  });
});

