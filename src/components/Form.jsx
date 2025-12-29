import { useState } from "react";

export default function Form({ onAddTodo }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = text.trim();

    if (value.length === 0) {
      setError("La tarea no puede estar vacía.");
      return;
    }

    if (value.length < 2) {
      setError("Escribí al menos 2 caracteres.");
      return;
    }

    onAddTodo(value);
    setText("");
    setError("");
  };

  const handleChange = (e) => {
    setText(e.target.value);

    // si ya había error, lo limpiamos cuando empiece a escribir
    if (error) setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Nueva tarea</label>

      <div>
        <span aria-hidden="true">➕</span>

        <input
          id="todo"
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Escribí una tarea..."
        />

        <button type="submit">Agregar</button>
      </div>

      {error && <p role="alert">{error}</p>}
    </form>
  );
}
