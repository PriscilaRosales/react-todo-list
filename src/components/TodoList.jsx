import { VStack } from "@chakra-ui/react";
import Todo from "./Todo.jsx";

function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) {
  return (
    <VStack spacing={3} align="stretch">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </VStack>
  );
}

export default TodoList;
