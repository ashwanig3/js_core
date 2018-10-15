let items = document.querySelectorAll('#items-list > li');
var dragValue;
var dropValue;

items.forEach(item => {
  item.setAttribute("draggable", "true");
  item.addEventListener('dragstart', dragStart)
  item.addEventListener("dragover", dragOver)
  item.addEventListener("drop", drop)
})

function dragStart (e) {
  dragValue = this;
  console.log(dragValue);
  // e.dataTransfer.setData('text/plain' , e.target.id);
  e.dataTransfer.dropEffect = "copy";
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function drop(e) {
  e.preventDefault();
  if(dragValue !== this) {
     dropValue = this.innerHTML;
     this.innerHTML = dragValue.innerHTML;
     dragValue.innerHTML = dropValue;
   }
  
}

