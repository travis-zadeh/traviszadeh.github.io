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

  links.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    clearTimeout(autoCloseTimer);
    closeNav();
  });
});

  // ── Mobile image captions ─────────────────────────────
  if ('ontouchstart' in window) {
    const cards = document.querySelectorAll('.ms-card');
    const CAPTION_DURATION = 3000;

    // Disable archive links on mobile
    cards.forEach(card => {
      card.querySelectorAll('a').forEach(link => {
        link.addEventListener('touchend', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      });
    });

    // Use touchend (not touchstart) for caption toggle
    // so it doesn't conflict with the document touchstart dismiss
    cards.forEach(card => {
      let captionTimer = null;

      card.addEventListener('touchend', (e) => {
        e.stopPropagation();

        const isVisible = card.classList.contains('caption-visible');

        // Hide all captions
        cards.forEach(c => {
          c.classList.remove('caption-visible');
          // Note: don't clear other cards' timers here — they self-clear
        });

        // If this card wasn't already showing, show it
        if (!isVisible) {
          card.classList.add('caption-visible');
          clearTimeout(captionTimer);
          captionTimer = setTimeout(() => {
            card.classList.remove('caption-visible');
          }, CAPTION_DURATION);
        }
      });
    });

    // Tap anywhere else to dismiss all captions
    document.addEventListener('touchend', () => {
      cards.forEach(c => c.classList.remove('caption-visible'));
    }, { passive: true });
  }

  // ── Footer year ───────────────────────────────────────
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

}());
