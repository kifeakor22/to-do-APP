var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
var button;

var todos = [];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index",[i])
    todoList.appendChild(li);
    let button = document.createElement("button")

    button.textContent = "Complete"
    li.appendChild(button)

     button.addEventListener("click",function(event){
      element = event.target;
      console.log(element)
      var j = button.parentNode.dataset.index
      console.log(j)
      todos.splice(j, 1)
      renderTodos()
})
localStorage.setItem("todo",JSON.stringify(todos))  
  }  
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});

init = function (){
  storedTodos = JSON.parse(localStorage.getItem("todo"))
  if(storedTodos) {
    todos = storedTodos
    renderTodos()
  }
}

init()





