const canvas = document.getElementById('triangle');
const svgTriangle = document.querySelector('.svg-triangle');
const svgTriangle2 = document.querySelector('.svg-triangle2');

function getRandomNumber(min,max){
  return Math.random() * (max-min) + min;
}

setInterval( _ => {

  let rotate = getRandomNumber(-270,150);
  let translateX = getRandomNumber(-150,150);
  let translateY = getRandomNumber(-150,150);

  canvas.style.transform = `rotate(${rotate}deg)
    translateX(${translateX}px) translateY(${translateY}px)`;

}, 2500);

setInterval( _ => {
 
 let svg_rotate = getRandomNumber(-250,120);
 let svg_translateX = getRandomNumber(-150,150);
 let svg_translateY = getRandomNumber(-150,150);

 svgTriangle.style.transform = `rotate(${svg_rotate}deg)
    translateX(${svg_translateX}px)  translateY(${svg_translateY}px)`;

}, 3500);
