const loadText = document.querySelector('.loading-text');
const backGround = document.querySelector('.bg');
let load = 0;

//setInterval function helps us to run the given function in each 30 miliseconds. You can change the time frequency.
let int = setInterval(blurring, 30);
const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerHTML = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  if (load == 100) {
    loadText.style.opacity = 1;
    loadText.innerHTML = 'WELCOME HALIL CAN';
  }

  backGround.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(loadText.style.opacity);
}
