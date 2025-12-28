export default function Todo({ todo, onToggleTodo, onDeleteTodo }) {
  if (!todo) return null;

  return (
    <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <label style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
      </label>

      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button type="button" onClick={() => onDeleteTodo(todo.id)}>
        Eliminar
      </button>
    </li>
  );
}
