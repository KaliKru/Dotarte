// Stabilizes the project-card hover growth: without this, the moving
// card boundary can end up under the cursor and cause rapid flicker
// between neighboring cards. A short hide-delay (with an immediate
// cancel on re-entry) smooths that out.
//
// The same .is-active class also powers keyboard focus (so the
// description isn't hover-only for keyboard users) and a tap-to-reveal
// on touch devices for the non-link placeholder cards, which have no
// hover or focus at all.
document.querySelectorAll('.project-card').forEach(function (card) {
  var hideTimer = null;

  function show() {
    clearTimeout(hideTimer);
    card.classList.add('is-active');
  }
  function hideSoon() {
    hideTimer = setTimeout(function () {
      card.classList.remove('is-active');
    }, 120);
  }

  card.addEventListener('mouseenter', show);
  card.addEventListener('mouseleave', hideSoon);
  card.addEventListener('focus', show);
  card.addEventListener('blur', hideSoon);

  if (card.classList.contains('is-placeholder')) {
    card.addEventListener('click', function (e) {
      if (!card.classList.contains('is-active')) {
        e.preventDefault();
        show();
      }
    });
  }
});

document.getElementById('copyright-year').textContent = new Date().getFullYear();

var logoNav = document.getElementById('logoNav');
var menuNav = document.getElementById('menuNav');
var scrollTopFloat = document.getElementById('scrollTopFloat');
var lastScrollY = window.scrollY;

window.addEventListener('scroll', function () {
  var currentScrollY = window.scrollY;
  var scrollingDown = currentScrollY > lastScrollY;

  if (scrollingDown && currentScrollY > 80) {
    logoNav.classList.add('nav-hidden');
    menuNav.classList.add('nav-hidden');
    scrollTopFloat.classList.add('nav-hidden');
  } else {
    logoNav.classList.remove('nav-hidden');
    menuNav.classList.remove('nav-hidden');
    scrollTopFloat.classList.remove('nav-hidden');
  }

  lastScrollY = currentScrollY;
}, { passive: true });
