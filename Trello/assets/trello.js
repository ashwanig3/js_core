var createBoardLink = document.querySelector(".create-board");
var addInput = document.querySelector(".add-input");
var addList = document.querySelector(".add-list");

var allBoards = [];

class Board{
	constructor(name) {
		this.name = name;
	}

	addBoard() {
		let id;
		if(allBoards.length == 0) {
			id = 0;
		}else {
			id = allBoards.length
		}


		var board = {
			name: this.name,
			id: id,
			lists: []
		}

		allBoards.push(board);
	}
}

class List {
	constructor(name) {
		this.name = name;
	}

	addList() {
		let id;
		if(allBoards[0].lists.length == 0) {
			id = 0;
		}else {id = allBoards[0].lists.length}

		var list = {
		name:this.name,
		id: id,
		cards: []
	}

	allBoards[0].lists.push(list)
	}

}

class Cards {
	constructor(name, description) {
		this.name = name;
		this.description = description;
	}

	addCards() {
		let id;
		if(allBoards[0].lists[0].cards.length == 0) {
			id = 0;
		}else {id = allBoards[0].lists[0].cards.length}

		var card = {
			name: this.name,
			id: id,
			description: this.description
		}

		allBoards[0].lists[0].cards.push(card);
	}

}


function addBoardTitle() {
	addInput.innerHTML = `<input class="board-title" type="text" name="add title" placeholder="add board title">
							<button class="create-board-btn">Create Board</button>`;
}


function renderedBoard(e) {
	if(e.target.className !== 'create-board-btn') return;
	e.preventDefault();

	var boardTitle = document.querySelector(".board-title");
	let board = new Board(boardTitle.value);
	board.addBoard();
		addList.innerHTML = `<h2 class="board-heading">${board.name}</h2>
												<input class="list-input"5 type="text" name="add-list" placeholder="+Add a list">
												<button class="list-input-btn">submit</button>`;
	
	e.target.parentElement.remove();
}


function addListBoard(e) {
	if(e.target.className !== 'list-input-btn') return;
	e.preventDefault();
	var listInput = document.querySelector(".list-input");
	let list = new List(listInput.value);
	list.addList();
	var listContainer = document.querySelector(".list-container");
	listContainer.style.display = "block";
	listContainer.innerHTML = `<h4 class="list-item-heading">${list.name}</h4>
															<div class="add-board">+Add Board</div>`
}



createBoardLink.addEventListener("click", addBoardTitle);
addInput.addEventListener("click" , renderedBoard);
addList.addEventListener("click", addListBoard);