
let canvas = document.getElementById("drawEmblem");
let tn = document.getElementById("typeName");
let dc = document.getElementById("drawColor");
let bgc = document.getElementById("bgColor");
let pen = document.getElementById("p-thickness");
let ctx = canvas.getContext("2d");
let drawable = false;
let picked = false;
let mouseX = 0;
let mouseY = 0;
let lastX = 0;
let lastY = 0;
let typeName;
let userEmblem;
document.querySelector('.p-info').textContent = 'Pen Size: ' + pen.value + 'px';
ctx.lineCap = "round";


ctx.fillStyle = bgc.value;
ctx.fillRect(0, 0, canvas.width, canvas.height);


canvas.addEventListener('mousedown', () => {
  if(picked){
    drawable = true;
    ctx.beginPath();
  }
});

bgc.addEventListener('input', () => {
  ctx.fillStyle = bgc.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('drawEmblem').onmousemove = function moveDraw(e) {
  mouseX = e.pageX - $('#drawEmblem').offset().left;
  mouseY = e.pageY - $('#drawEmblem').offset().top;



  if(drawable){
    ctx.lineWidth = pen.value;
    ctx.strokeStyle = dc.value;

    ctx.moveTo(lastX, lastY);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();

  }
  lastX = mouseX;
  lastY = mouseY;
}

document.addEventListener('mouseup', () => {
  drawable = false;
  ctx.closePath();
});

pen.addEventListener('input', ()=>{
  document.querySelector('.p-info').textContent = 'Pen Size: ' + pen.value + 'px';
});

document.querySelector('.typeConfirm').addEventListener('click', () => {
  document.querySelector('#c-emblem').style.display = 'block';
  document.querySelector('.typeConfirm').style.display = 'none';
  tn.style.display = 'none';
  typeName = tn.value;
  document.querySelector('.prompt').textContent = 'Draw The ' + typeName + ' Type Emblem';
  document.querySelector('.n-prompt').textContent = '';
  document.querySelector('.col-prompt').textContent = 'Pick Emblem Background Color';
  document.querySelector('.bgConfirm').style.display = 'block';
  bgc.style.display = 'block';
});

document.querySelector('.bgConfirm').addEventListener('click', () => {
  document.querySelector('.bgConfirm').style.display = 'none';
  bgc.style.display = 'none';
  document.querySelector('.col-prompt').textContent = 'Pick Emblem Color';
  document.querySelector('.drawConfirm').style.display = 'block';
  dc.style.display = 'block';
});

document.querySelector('.drawConfirm').addEventListener('click', () => {
  document.querySelector('.drawConfirm').style.display = 'none';
  dc.style.display = 'none';
  document.querySelector('.col-prompt').style.display = 'Draw Your Emblem';
  picked = true;
  document.querySelector('#d-tools').style.display = 'flex';
  document.querySelector('#d-pen').style.display = 'flex';
});

document.querySelector('.clear').addEventListener('click', () => {
  ctx.fillStyle = bgc.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

document.querySelector('.finish').addEventListener('click', () => {
  userEmblem = canvas.toDataURL();
  console.log(userEmblem);
  $("#content").load('ranking.html');
  $(document).ready(function() {
    $.getScript('ranking.js');
  });

});
