(function () {


const btnOpenClose = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.menu');

btnOpenClose.addEventListener ('click', function() {
  sidebar.classList.toggle('menu--active')
});

} () );