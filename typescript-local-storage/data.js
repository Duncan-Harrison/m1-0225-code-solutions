'use strict';
let todos = [];
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const item = localStorage.getItem('todos-storage');
  const itemJSON = JSON.parse(item);
  if (itemJSON != null) {
    return itemJSON;
  }
}
readTodos();
