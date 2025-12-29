import { useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Input,
  Text,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";

function Todo({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed.length < 3) return; // mínimo simple (después lo hacemos con mensaje)
    onEditTodo(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <Box
      p={3}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
    >
      <HStack spacing={3} align="center">
        {/* ✅ COMPLETAR */}
        <Tooltip
          label={todo.completed ? "Marcar como pendiente" : "Marcar como completada"}
          hasArrow
          placement="top"
        >
          <IconButton
            aria-label="Completar"
            onClick={() => onToggleTodo(todo.id)}
            size="sm"
            variant={todo.completed ? "solid" : "outline"}
            colorScheme={todo.completed ? "green" : "gray"}
            icon={<span>{todo.completed ? "✅" : "☑️"}</span>}
          />
        </Tooltip>

        {/* ✍️ TEXTO / INPUT */}
        {isEditing ? (
          <Input
            ref={inputRef}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            size="sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") handleCancel();
            }}
          />
        ) : (
          <Text
            flex="1"
            textDecoration={todo.completed ? "line-through" : "none"}
            color={todo.completed ? "gray.500" : "gray.800"}
          >
            {todo.text}
          </Text>
        )}

        <Spacer />

        {/* ✅ BOTONES DERECHA */}
        {isEditing ? (
          <>
            {/* GUARDAR */}
            <Tooltip label="Guardar" hasArrow placement="top">
              <IconButton
                aria-label="Guardar"
                size="sm"
                colorScheme="green"
                onClick={handleSave}
                icon={<span>✅</span>}
              />
            </Tooltip>

            {/* CANCELAR */}
            <Tooltip label="Cancelar" hasArrow placement="top">
              <IconButton
                aria-label="Cancelar"
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={handleCancel}
                icon={<span>❌</span>}
              />
            </Tooltip>
          </>
        ) : (
          <>
            {/* EDITAR */}
            <Tooltip label="Editar" hasArrow placement="top">
              <IconButton
                aria-label="Editar"
                size="sm"
                variant="ghost"
                onClick={() => {
                  setEditText(todo.text); // por si cambió desde afuera
                  setIsEditing(true);
                }}
                icon={<span>✏️</span>}
              />
            </Tooltip>

            {/* ELIMINAR */}
            <Tooltip label="Eliminar" hasArrow placement="top">
              <IconButton
                aria-label="Eliminar"
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={() => onDeleteTodo(todo)}
                icon={<span>🗑️</span>}
              />
            </Tooltip>
          </>
        )}
      </HStack>
    </Box>
  );
}

export default Todo;
