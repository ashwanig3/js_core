var input = document.querySelector('.input-box');
var btn = document.querySelector('.add-btn');
var todoList = document.querySelector('.todo-list');
var searchBox = document.querySelector('.search-box');

var allTodo = [];

function addTodo(e) {
    e.preventDefault();
    var inputVal = input.value;
    allTodo.push(inputVal)
    displayTodo(allTodo);
}

function displayTodo(arr = []) {
    todoList.innerHTML = "";
    arr.forEach((todo, id) => {
        todoList.innerHTML += 
        `<li id=${id}>
            <span>${todo}</span>
            <button class="del-btn" id=${id}>delete</button>
        </li>`
    })
}

function deleteTodo(e) {
    if(e.target.className !== 'del-btn') return;
    var id = e.target.id;
    allTodo.splice(id, 1);
    displayTodo(allTodo)
}

function searchTodo(e) {
    e.preventDefault()
    var searchVal = e.target.value.toLowerCase();
    console.log(allTodo)
    var searchedArr = allTodo.filter(todo => todo.toLowerCase().includes(searchVal))
    console.log(searchedArr)
    displayTodo(searchedArr)
    
}

btn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
searchBox.addEventListener('keyup', searchTodo)