import Todo from "./Todo";

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
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
          />
        ))}
      </ul>
    </div>
  );
}
