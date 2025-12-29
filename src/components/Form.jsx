import { useState } from "react";

export default function Form({ onAddTodo }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = text.trim();

    // ✅ Validación (TP)
    if (!trimmed) {
      setError("Por favor escribí una tarea antes de agregar.");
      return;
    }

    if (trimmed.length < 2) {
      setError("La tarea debe tener al menos 2 caracteres.");
      return;
    }

    if (trimmed.length > 80) {
      setError("La tarea no puede superar 80 caracteres.");
      return;
    }

    // ✅ Enviar a App
    onAddTodo(trimmed);

    // ✅ Reset
    setText("");
    setError("");
  };

  const handleChange = (e) => {
    setText(e.target.value);

    if (error) setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <label style={{ display: "block", marginBottom: 8 }}>
        Nueva tarea
      </label>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {/* Ícono simple */}
        <span aria-hidden="true">➕</span>

        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Escribí una tarea..."
          style={{ flex: 1, padding: 8 }}
        />

        <button type="submit">Agregar</button>
      </div>

      {error ? (
        <p role="alert" style={{ marginTop: 8 }}>
          {error}
        </p>
      ) : null}
    </form>
  );
}
