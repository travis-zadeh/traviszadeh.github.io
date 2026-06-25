/* ─────────────────────────────────────────────────────────
   TRAVIS ZADEH — traviszadeh.com
   Shared navigation script
   ───────────────────────────────────────────────────────── */

(function () {
  const nav    = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  // On the home page the nav starts scrolled (solid background)
  if (nav.classList.contains('home')) {
    nav.classList.add('scrolled');
  }

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Mobile nav auto-close ──────────────────────────────
  let autoCloseTimer = null;

  function closeNav() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    clearTimeout(autoCloseTimer);
    if (open) {
      autoCloseTimer = setTimeout(closeNav, 4000);
    }
  });

  links.addEventListener('click', () => {
    clearTimeout(autoCloseTimer);
  });

  // ── Mobile image captions ─────────────────────────────
  // Only activate on touch devices
  if ('ontouchstart' in window) {
    const cards = document.querySelectorAll('.ms-card');
    const CAPTION_DURATION = 3000; // 3 seconds

    cards.forEach(card => {
      let captionTimer = null;

      // Disable ALL archive links inside card on mobile — tap shows caption only
      const cardLinks = card.querySelectorAll('a');
      cardLinks.forEach(link => {
        link.addEventListener('touchend', (e) => {
          e.preventDefault(); // block navigation
          e.stopPropagation();
        });
        link.addEventListener('touchstart', (e) => {
          e.stopPropagation();
        }, { passive: true });
      });

      card.addEventListener('touchstart', (e) => {
        e.stopPropagation();

        // Hide any other open captions
        cards.forEach(c => {
          c.classList.remove('caption-visible');
        });

        // Show this caption
        card.classList.add('caption-visible');

        // Auto-hide after 3 seconds
        clearTimeout(captionTimer);
        captionTimer = setTimeout(() => {
          card.classList.remove('caption-visible');
        }, CAPTION_DURATION);
      }, { passive: true });
    });

    // Tap anywhere else to dismiss
    document.addEventListener('touchstart', () => {
      cards.forEach(c => c.classList.remove('caption-visible'));
    }, { passive: true });
  }

  // ── Footer year ───────────────────────────────────────
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

}());
