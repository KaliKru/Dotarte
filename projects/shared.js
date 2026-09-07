// Shared across all project subpages (Ajar, Seasons, ...).
// Safely does nothing for elements that don't exist yet on a given
// page (e.g. Seasons currently has no ToC/footer while its hero is
// being built), so this one file works for pages at any stage.

// --- ToC scroll-spy (only active if a ToC + sectioned content exist) ---
var sections = document.querySelectorAll('.case-content > section[id]');
var links = document.querySelectorAll('.toc-link');

if (sections.length && links.length) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = document.querySelector('.toc-link[data-target="' + entry.target.id + '"]');
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(function (l) { l.classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  sections.forEach(function (section) { observer.observe(section); });
}

// --- Copyright year (only if the footer already exists on this page) ---
var copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

// --- Fixed nav + floating scroll-to-top: hide on scroll down, show on scroll up ---
var mainNav = document.getElementById('mainNav');
var scrollTopFloat = document.getElementById('scrollTopFloat');

if (mainNav) {
  var mainNavLink = mainNav.querySelector('a');
  var lastScrollY = window.scrollY;

  window.addEventListener('scroll', function () {
    var currentScrollY = window.scrollY;
    var scrollingDown = currentScrollY > lastScrollY;

    if (scrollingDown && currentScrollY > 80) {
      mainNav.classList.add('nav-hidden');
      if (mainNavLink) mainNavLink.setAttribute('tabindex', '-1');
      if (scrollTopFloat) scrollTopFloat.classList.add('nav-hidden');
    } else {
      mainNav.classList.remove('nav-hidden');
      if (mainNavLink) mainNavLink.removeAttribute('tabindex');
      if (scrollTopFloat) scrollTopFloat.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}
