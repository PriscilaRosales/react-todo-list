import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const STORAGE_KEY = "todos";

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = (id, newText) => {
  setTodos((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    )
  );
};

  const handleDeleteTodo = (id) => {
    const confirmDelete = window.confirm("¿Seguro que querés eliminar esta tarea?");
    if (!confirmDelete) return;
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Todo List</h1>

      <Form onAddTodo={handleAddTodo} />

      <label>
        Filtrar:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todas</option>
          <option value="active">Incompletas</option>
          <option value="completed">Completadas</option>
        </select>
      </label>

      <TodoList
        todos={filteredTodos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default App;
