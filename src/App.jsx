import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

function App() {
  const STORAGE_KEY = "todos";

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoToDelete, setTodoToDelete] = useState(null);

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

  const handleDeleteTodo = (todo) => {
  setTodoToDelete(todo);
  onOpen();
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Eliminar tarea</ModalHeader>
    <ModalCloseButton />

    <ModalBody>
      <Text>
        ¿Seguro que querés eliminar{" "}
        <strong>{todoToDelete?.text}</strong>?
      </Text>
    </ModalBody>

    <ModalFooter>
      <Button variant="ghost" mr={3} onClick={onClose}>
        Cancelar
      </Button>
      <Button
        colorScheme="red"
        onClick={() => {
          setTodos((prev) =>
            prev.filter((t) => t.id !== todoToDelete.id)
          );
          setTodoToDelete(null);
          onClose();
        }}
      >
        Eliminar
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

    </div>
  );
}

export default App;
