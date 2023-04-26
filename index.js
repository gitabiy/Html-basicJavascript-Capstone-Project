const hamburger = document.querySelector('.hamburger1');
const navMenu1 = document.querySelector('.nav-menu1');
const close = document.querySelector('.close');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu1.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu1.classList.remove('active');
}));
close.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu1.classList.toggle('active');
});