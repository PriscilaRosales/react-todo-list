import { useEffect, useState } from "react";

export default function Todo({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [error, setError] = useState("");

  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const startEdit = () => {
    setIsEditing(true);
    setError("");
    setEditText(todo.text);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setError("");
    setEditText(todo.text);
  };

  const saveEdit = () => {
    const trimmed = editText.trim();

    if (trimmed.length === 0) {
      setError("La tarea no puede estar vacía.");
      return;
    }
    if (trimmed.length < 2) {
      setError("Escribí al menos 2 caracteres.");
      return;
    }

    onEditTodo(todo.id, trimmed);
    setIsEditing(false);
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
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
      <div style={{ flex: 1 }}>
        {!isEditing ? (
          <span
            style={{
              display: "block",
              textDecoration: todo.completed ? "line-through" : "none",
              opacity: todo.completed ? 0.7 : 1,
            }}
          >
            {todo.text}
          </span>
        ) : (
          <>
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              style={{ width: "100%" }}
            />
            {error && (
              <small style={{ display: "block", marginTop: "4px" }}>
                {error}
              </small>
            )}
          </>
        )}
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          type="button"
          onClick={() => onToggleTodo(todo.id)}
          title="Completar"
          disabled={isEditing}
        >
          {todo.completed ? "☑️" : "✅"}
        </button>

        {!isEditing ? (
          <button type="button" onClick={startEdit} title="Editar">
            ✏️
          </button>
        ) : (
          <>
            <button type="button" onClick={saveEdit} title="Guardar">
              💾
            </button>
            <button type="button" onClick={cancelEdit} title="Cancelar">
              ✖️
            </button>
          </>
        )}

        <button
         type="button"
         onClick={() => onDeleteTodo(todo)}
         title="Eliminar"
         disabled={isEditing}
     >
  🗑
</button>
      </div>
    </li>
  );
}
