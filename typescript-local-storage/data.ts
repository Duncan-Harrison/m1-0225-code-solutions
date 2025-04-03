/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): void {
  const item: any = localStorage.getItem('todos-storage');
  const itemJSON = JSON.parse(item);
  if (itemJSON != null) {
    return itemJSON;
  }
}

readTodos();
