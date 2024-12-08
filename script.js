// script.js
const emailButton = document.querySelector('.wallpogo__button--email');

emailButton.addEventListener('click', () => {
  window.location.href = 'mailto:your-email@example.com';
});