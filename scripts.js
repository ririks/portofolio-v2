let menuToggle = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('active');
};

function toggleMenu() {
  menuToggle.classList.remove('active');
  navbar.classList.remove('active');
}
