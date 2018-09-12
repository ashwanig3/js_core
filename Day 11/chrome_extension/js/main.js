var toDoList =  [];

var ulElement = document.querySelector(".to_do_list ul");
var addBtn = document.getElementById("addBtn");
var todoValue = document.getElementById("todoValue");
var deleteTodo = document.querySelector("ul");
var heading = document.getElementById("welcome");



function displayToDo(toDoList = [],elem){
	ulElement.innerHTML = toDoList.map((todoItem, i) => {
		return (
			`<li>
				<input class="checkedItem" type = "checkbox" data-id=${i} />
				<span class="todo-item" data-id=${i}>${todoValue.value}</span>
				<span class="deleteItem" data-id=${i}>&#215;</span>
			</li>`
			)
	}).join('');
};

//function to add todoitem
function addTodoItem(e) {
	e.preventDefault();
	let todoItem = todoValue.value;
	var obj = {
		name: todoItem,
		done: false
	}
	toDoList.push(obj);
	localStorage.setItem('to-do-list', JSON.stringify(toDoList));
	displayToDo(toDoList,ulElement);
	
	todoValue.value = "";
}




function deleteTodoItem(e) {
	  if(e.target.className !== 'deleteItem') return;
	  	let id = e.target.dataset.id;
  		toDoList.splice(id, 1);
  		displayToDo(toDoList, ulElement);
}


function setExactTime() {
	var time = new Date;

	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	var time = document.getElementById('time');
	time.innerHTML = hours + ':' + minutes + ':' + seconds;



}
setInterval(setExactTime, 1000);

addBtn.addEventListener('click' , addTodoItem);
deleteTodo.addEventListener('click' , deleteTodoItem);




