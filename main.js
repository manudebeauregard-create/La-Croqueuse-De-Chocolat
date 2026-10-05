// Menu mobile plein écran
const toggle = document.getElementById('menuToggle');
const closeBtn = document.getElementById('navClose');
const nav = document.getElementById('nav');

function setMenu(open) {
  if (!nav) return;
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (toggle) toggle.setAttribute('aria-expanded', open);
}
if (toggle) toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
if (closeBtn) closeBtn.addEventListener('click', () => setMenu(false));
if (nav) nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Année dans le footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
