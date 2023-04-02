// select the input, add button, and todo list
const input = document.querySelector("#task");
const addButton = document.querySelector("#add");
const todoList = document.querySelector("#todo-list");

// function to create a new task
function createNewTask(task) {
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  
  span.innerText = task;
  deleteButton.innerText = "Delete";
  
  // event listener to delete task when delete button is clicked
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });
  
  // append the span and delete button to the list item
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);
  
  // return the new list item
  return listItem;
}

// function to add a new task to the list
function addTask() {
  const task = input.value;
  
  if (task) {
    const listItem = createNewTask(task);
    todoList.appendChild(listItem);
    input.value = "";
  }
}

// event listener for clicking the add button
addButton.addEventListener("click", addTask);

// event listener for pressing enter in the input field
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
