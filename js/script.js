/* ─────────────────────────────────────────────────────────
   TRAVIS ZADEH — traviszadeh.com
   Shared navigation script
   ───────────────────────────────────────────────────────── */

(function () {
  const nav    = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  // On the home page the nav starts scrolled (solid background);
  // on inner pages it becomes solid once the user scrolls past 40px.
  if (nav.classList.contains('home')) {
    nav.classList.add('scrolled');
  }

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  let autoCloseTimer = null;

  function closeNav() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);

    // Auto-close after 4 seconds if open
    clearTimeout(autoCloseTimer);
    if (open) {
      autoCloseTimer = setTimeout(closeNav, 4000);
    }
  });

  // Cancel timer if user taps a link
  links.addEventListener('click', () => {
    clearTimeout(autoCloseTimer);
  });

  // Footer year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
}());
