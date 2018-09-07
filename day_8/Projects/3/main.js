var backColor = document.querySelector("#background-color");
window.addEventListener("click" , event => {
var	changeColor = ['red', 'blue', 'green', 'pink', 'yellow', 'grey']
	backColor.style.backgroundColor = changeColor[Math.floor(Math.random() * changeColor.length)];
});

