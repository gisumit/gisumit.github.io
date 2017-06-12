const pickedColor = document.querySelector('input.circle');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = `${pickedColor.value}` || '#fff';

Array.from(document.querySelectorAll('.circle'))
     .splice(1)
     .forEach(e => {
            e.addEventListener('click', f => {
                console.log(f.target.dataset.color)
                ctx.fillStyle = `${f.target.dataset.color}`;
            })
    });

pickedColor.addEventListener('change', e => {
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