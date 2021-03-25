const newTodo = document.querySelector("#new-todo");
const submitButton = document.querySelector("#submit-todo");
const todosList = document.querySelector("#todos-list");
const validate = document.querySelector("#validate");
const todosLeft = document.querySelector("#todos-left");
todosLeft.innerHTML = 0;
// create todo

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (newTodo.value == "" || newTodo.value == " ") {
    validate.innerHTML = `Please insert a new todo`;
    return;
  }

  const todo = document.createElement("div");
  todo.classList.add("card", "bg-light", "mb-1");
  const row = document.createElement("div");
  row.classList.add("row");

  // todo body
  const colTodo = document.createElement("div");
  colTodo.classList.add("col-4", "card-subtitle", "mt-2", "text-center");
  const todoBody = document.createElement("h4");
  todoBody.classList.add("todo-text");
  todoBody.innerHTML = `${newTodo.value}`;

  // todo checkbox
  const colCheckBox = document.createElement("div");
  colCheckBox.classList.add("col-4", "mt-2", "text-right");
  const checkbox = document.createElement("input");
  checkbox.classList.add("form-check-input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "done");
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      todo.classList.add("done");
      todosLeft.innerHTML -= 1;
    } else {
      todo.classList.remove("done");
      todosLeft.innerHTML = `${allTodos.length}`;
    }
  });
  const done = document.createElement("label");
  done.setAttribute("for", "done");
  done.innerHTML = "Done";

  // todo remove button
  const colRemove = document.createElement("div");
  colRemove.classList.add("col-4", "text-right");
  const removeButton = document.createElement("button");
  removeButton.classList.add("btn", "btn-link");
  removeButton.innerHTML = "remove";

  removeButton.addEventListener("click", () => {
    todo.remove();
    todosLeft.innerHTML -= 1;
  });

  colTodo.appendChild(todoBody);

  colCheckBox.appendChild(checkbox);
  colCheckBox.appendChild(done);
  colRemove.appendChild(removeButton);

  row.appendChild(colTodo);
  row.appendChild(colCheckBox);
  row.appendChild(colRemove);

  todo.appendChild(row);
  todosList.appendChild(todo);

  newTodo.value = "";
  validate.innerHTML = "";

  const allTodos = document.querySelectorAll(".card");
  todosLeft.innerHTML = `${allTodos.length}`;
});

// clear all todos

const clearTodos = document.querySelector("#clear-todos");
const clearModal = document.querySelector("#clear-modal");
const closeButton = document.querySelector("#close");
const clearButton = document.querySelector("#clear");

// show clear todos modal

clearTodos.addEventListener("click", () => {
  clearModal.style.display = "flex";
});

// When the user clicks on cancel, close the modal
closeButton.addEventListener("click", () => {
  clearModal.style.display = "none";
});

// When the user clicks on clear, clear the list
clearButton.addEventListener("click", () => {
  clearModal.style.display = "none";
  todosList.innerHTML = "";
  todosLeft.innerHTML = 0;
});

// hide completed todos

const hideTodos = document.querySelector("#hide-completed");
hideTodos.addEventListener("change", () => {
  const doneTodos = document.querySelectorAll(".done");
  if (hideTodos.checked) {
    for (let i = 0; i < doneTodos.length; i++) {
      doneTodos[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < doneTodos.length; i++) {
      doneTodos[i].style.display = "block";
    }
  }
});

// search todos
const searchInput = document.querySelector("#search-todos");
searchInput.addEventListener("input", () => {
  
  let filter = searchInput.value.toLowerCase();
  let allTodos = document.querySelectorAll(".card");
  let todosText = document.querySelectorAll(".todo-text");
  let textValue;

  for (let i = 0; i < todosText.length; i++) {
    const text = todosText[i].innerText;
    if (text) {
      textValue = text;
      if (textValue.toLowerCase().indexOf(filter) > -1) {
        allTodos[i].style.display = "";
      } else {
        allTodos[i].style.display = "none";
      }
    }
  }
});

