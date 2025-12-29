import { useState } from "react";
import {
  Button,
  HStack,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

function Form({ onAddTodo }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = text.trim();

    if (trimmed.length < 3) {
      setError("La tarea debe tener al menos 3 caracteres");
      return;
    }

    onAddTodo(trimmed);
    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={!!error}>
        <FormLabel>Nueva tarea</FormLabel>

        <HStack>
          <Input
            placeholder="Escribí una tarea..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (error) setError("");
            }}
          />

          <Button type="submit" colorScheme="purple">
            Agregar
          </Button>
        </HStack>

        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </form>
  );
}

export default Form;
