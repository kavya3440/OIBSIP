const form = document.querySelector('form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement('li');
    li.textContent = todo;
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', function() {
      todos.splice(i, 1);
      renderTodos();
    });
    li.appendChild(button);
    todoList.appendChild(li);
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const todo = input.value.trim();
  if (todo !== '') {
    todos.push(todo);
    input.value = '';
    renderTodos();
  }
});

