var canvas = document.getElementById("myCanvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var brickPadding = 10;
var brickOffsetLeft = 30;
var brickOffsetTop = 30;
var paddleWidth = 75;
var paddleHeight = 10;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy= -2;


// var mouse ={
//   x:undefined,
//   y:undefined
// }
// document.addEventListener("mousemove", event => {
//   mouse.x = event.x;
//   mouse.y = event.y;
// })

document.addEventListener("keydown", keyDownHandler,false);
document.addEventListener("keyup", keyUpHandler,false);


function keyDownHandler(e) {
  console.log(e);
  if(e.keyCode == 39) {
    rightPressed = true;
  }else if(e.keyCode == 37) {
    leftPressed = true;
  }

}

function keyUpHandler(e){
  if(e.keyCode == 39) {
    rightPressed = false;
  } else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

var bricks = [];
for(var i=0; i< 5; i++) {
    bricks[i] = [];
    for(var j=0; j< 3; j++) {
        bricks[i][j] = { x: 0, y: 0, status:1};
    }
}

function drawBricks() {
  for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 3; j++) {
      if(bricks[i][j].status == 1) {
        var brickX = (i *(75 + brickPadding)+ brickOffsetLeft);
        var brickY = (j *(20 + brickPadding)+ brickOffsetTop);
            bricks[i][j].x = brickX;
            bricks[i][j].y = brickY;
            c.beginPath();
            c.rect(brickX, brickY, 75, 20);
            c.fillStyle = "#0095DD";
            c.fill();
            c.closePath();
      }
    }
  }
}

function collisionDetection() {
  for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 3; j++) {
      var b = bricks[i][j]
      if(b.status == 1) {
        if(x > b.x && x < b.x + 75 && y > b.y && y < b.y + 20) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}

function drawPaddle() {
  c.beginPath();
  c.rect(paddleX, canvas.height-paddleHeight,paddleWidth,paddleHeight);
  c.fillStyle = "#0095DD";
  c.fill();
  c.closePath();
}


function Ball(x,y,dx,dy,radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#0095DD";
    c.fillStyle = "#0095DD";
    c.fill()
    c.stroke();
    c.closePath();
  }
 
    this.update =  function() {
    if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}
 
  var ball = new Ball(100,100,3,3,10);


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  ball.update();
  drawPaddle();
  collisionDetection();

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
  
}
animate();
