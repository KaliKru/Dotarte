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

// E-Mail-Link: Adresse liegt Base64-codiert im data-mail-Attribut und wird erst beim Klick zusammengesetzt
document.addEventListener('click', function (e) {
  var a = e.target.closest('a[data-mail]');
  if (!a) return;
  e.preventDefault();
  try { window.location.href = 'mailto:' + atob(a.dataset.mail); } catch (err) {}
});
