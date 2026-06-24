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

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Footer year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
}());
