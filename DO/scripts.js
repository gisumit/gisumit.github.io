
const box = document.querySelector('#box');

window.addEventListener('deviceorientation', (e) => {
  let tiltLR = e.gamma;
  let tiltFB = e.beta;

  box.style.transform = `rotate(${tiltLR}deg) rotate3d(1, 0, 0, ${tiltFB * -1}deg)`;
});
