var snakeGrid = document.querySelector(".snake-grid");
console.log(snakeGrid);
var col = 25;
var row = 25;


for(var i = 1; i <= 25; i++){
			for(var j = 1; j <= 25; j++){
				snakeGrid.innerHTML  += `<div class="cell" data-row = ${i} data-col = ${j}></div>`;
				
			}
		}