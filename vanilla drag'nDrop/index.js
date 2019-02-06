var box = document.querySelector(".box");
var container = document.querySelector(".holder");

function dragstart(e) {
  console.log(e, "fire dragstart");
}
function dragover(e) {
  e.preventDefault();
  e.target.classList.add("over");
  console.log(e, "fire dragover");
}

function dragenter(e) {
  e.preventDefault();
  e.target.classList.add("over");
  console.log(e, "fire dragenter");
}

function drop(e) {
  console.log(e, "fire drop");
  e.target.classList.remove("over");
  container.append(box);
}

function handleDrop(e) {
  console.log(e, "fire dragenter");

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  return false;
}

function handleDragEnd(e) {
  e.target.classList.remove("over");
}

box.addEventListener("dragstart", dragstart);
box.addEventListener("dragover", dragover);
box.addEventListener("dragenter", dragenter);
box.addEventListener("dragleave", drop);
box.addEventListener("drop", handleDrop);
box.addEventListener("dragend", handleDragEnd);
