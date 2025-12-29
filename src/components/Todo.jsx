export default function Todo({ todo, onToggleTodo, onDeleteTodo }) {
  const handleEdit = () => {
    alert("Función editar: próximamente 🙂");
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "10px",
      }}
    >
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.7 : 1,
        }}
      >
        {todo.text}
      </span>

      <div style={{ display: "flex", gap: "8px" }}>
        <button type="button" onClick={() => onToggleTodo(todo.id)} title="Completar">
  {todo.completed ? "☑️" : "✅"}
</button>


        <button type="button" onClick={handleEdit} title="Editar">
          ✏️
        </button>

        <button type="button" onClick={() => onDeleteTodo(todo.id)} title="Eliminar">
          🗑
        </button>
      </div>
    </li>
  );
}
