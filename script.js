const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
});
