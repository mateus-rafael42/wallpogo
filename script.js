// script.js
const emailButton = document.querySelector('.wallpogo__button--email');

emailButton.addEventListener('click', () => {
  window.location.href = 'mailto:mateus.rafael.ufpr@gmail.com';
});

// Assuming you have a reference to the splash screen element
const splashScreen = document.querySelector('.splash-screen');

// Set a timeout to add the hidden class after 4.2 seconds
setTimeout(() => {
  splashScreen.classList.add('hidden'); // Add the hidden class after the total animation time
}, 4200); // 4.2 seconds in milliseconds