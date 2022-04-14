const search = document.querySelector('.search');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  // This input helps us to focus inside the input when we click the button.
  input.focus();
});
