const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');

window.addEventListener('keypress', e => {
  box1.innerHTML = e.key;
  box2.innerHTML = e.code;
});
