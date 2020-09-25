const topBar = document.getElementById('top-bar');
const mainNav = document.getElementById('main-nav');
const iconMenu = document.getElementById('icon-menu');

iconMenu.addEventListener('click', () => {
  if (topBar.classList.contains('top-bar--show')) {
    iconMenu.src = '/assets/images/icon-hamburger.svg';
    mainNav.classList.remove('main-nav--show');
    topBar.classList.remove('top-bar--show');
  } else {
    iconMenu.src = '/assets/images/icon-close.svg';
    mainNav.classList.add('main-nav--show');
    topBar.classList.add('top-bar--show');
  }
});
