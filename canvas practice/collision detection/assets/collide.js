var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
  x:10,
  y:10
}

addEventListener("mousemove", event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

var colors = [
  "#FF0000",
  "#FFA500",
  "#FFFF00",
  "#808000",
  "#FF00FF"
]
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getDistance(x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function Ball(x,y,radius,color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  // this.color = colors[Math.floor(Math.random() * colors.length)];
 this.color = randomColor(colors);
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }
  
  
  this.update = function() {
    
    this.draw();
  }
  }

var ball1 = new Ball(200,300,100);
var ball2 = new Ball(undefined,undefined,40);

// var ball = new Ball(canvas.width/2, canvas.height/2, 3, 30);


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  ball2.x = mouse.x;
  ball2.y = mouse.y;
  
  if(getDistance(ball1.x,ball1.y, ball2.x, ball2.y) < ball1.radius + ball2.radius) {
    ball1.color = 'blue';
  } else {
    ball1.color = 'red';
  }
  
 
  ball1.update();
  ball2.update();
}

animate();