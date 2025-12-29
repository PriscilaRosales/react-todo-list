import { useState } from "react";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";


function App() {
  const [todos, setTodos] = useState([]);

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

  const handleDeleteTodo = (id) => {
    const confirmDelete = window.confirm("¿Seguro que querés eliminar esta tarea?");
    if (!confirmDelete) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      <Form onAddTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
