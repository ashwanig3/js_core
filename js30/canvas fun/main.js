const canvas = document.querySelector(".canva");

const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.strokeStyle = '#BADA55';
c.lineJoin = 'round';
c.lineCap = 'round';
c.lineWidth = 100;
c.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
	if(!isDrawing) return;
	c.strokeStyle = `hsl(${hue}, 100%, 50%)`
	c.beginPath();
	c.moveTo(lastX, lastY);
	c.lineTo(e.offsetX, e.offsetY);
	c.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;

	if(hue >= 360) {
		hue = 0;
	}

	if(c.lineWidth >= 100 || c.lineWidth <= 1) {
		direction = !direction
	}

	if(direction) {
		c.lineWidth++;
	}else {
		c.lineWidth--;
	}
}


canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

