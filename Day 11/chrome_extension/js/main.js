var toDoList =[
{
	name: "JS DOM",
	done:false
}


];

var ulElement = document.querySelector(".to_do_list ul");
var addBtn = document.getElementById("addBtn");
var todoValue = document.getElementById("todoValue");
// var checkTask = document.getElementById("checkTask");
var checkToDoItem = document.querySelectorAll("ul");
// console.log(ulElement);



function displayToDo(todoItems,elem){
	elem.innerHTML = todoItems.map((todoItem, i) => {
		return (
			`<li>
				<input type = "checkbox" data-id=${i} />
				<span class="todo-item" data-id=${i}>${todoValue.value}</span>
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
	displayToDo(toDoList,ulElement);
	todoValue.value = "";
}

//function for the checked item

// function checkedTask(e) {
// 	if(e.target.dataset.id.checked) {
		
// 	}
// }

addBtn.addEventListener('click' , addTodoItem);
// checkToDoItem.addEventListener('click' ,checkedTask);

