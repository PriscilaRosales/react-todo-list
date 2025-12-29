import Todo from "./Todo.jsx";

export default function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  if (!todos || todos.length === 0) {
    return (
      <div>
        <h2>Lista</h2>
        <p>No hay tareas todavía.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista</h2>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
            onEditTodo={onEditTodo}
          />
        ))}
      </ul>
    </div>
  );
}
