
const colorEl = document.querySelector('#color');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = `${colorEl.value}`;

colorEl.addEventListener('change', e => {
    ctx.fillStyle = `${e.target.value}`;
});


canvas.addEventListener('touchmove', function(event) {
  for (var i = 0; i < event.touches.length; i++) {
    var touch = event.touches[i];
    ctx.beginPath();
    ctx.arc(touch.pageX, touch.pageY, 10, 0, 2*Math.PI, true);
    
    ctx.fill();
  }
}, false);