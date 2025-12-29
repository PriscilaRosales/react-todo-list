# Todo List – React

Aplicación de gestión de tareas desarrollada con React.
Permite crear, editar, completar, filtrar y eliminar tareas, con persistencia de datos en localStorage.
La interfaz es responsive y fue construida siguiendo buenas prácticas de React y UX.

---

## Demo
(Agregare el link cuando el proyecto esté deployado)

---

## ✨ Funcionalidades

- Agregar tareas con validación (mínimo de caracteres)
- Editar tareas existentes con feedback visual
- Marcar tareas como completadas
- Eliminar tareas con confirmación mediante modal
- Filtrar tareas:
  - Todas
  - Incompletas
  - Completadas
- Persistencia de datos usando localStorage
- Interfaz responsive
- Mensajes de error y feedback al usuario
- Tooltips en íconos para mejorar la experiencia de uso

---

## 🛠 Tecnologías utilizadas

- **React**
- **Chakra UI** (sistema de estilos)
- **Vite**
- **LocalStorage**

---

## 📂 Estructura del proyecto

src/
├─ App.jsx
├─ components/
│  ├─ Form.jsx
│  ├─ TodoList.jsx
│  ├─ Todo.jsx
├─ main.jsx

## 🧪 Validaciones y experiencia de usuario

- No se permite agregar tareas con menos de 3 caracteres
- Mensajes de error visibles al usuario
- Al editar una tarea:
  - El input recibe foco automáticamente
  - Se puede guardar o cancelar la edición
- Tooltips informativos en los íconos (editar, eliminar, completar)

## 💾 Persistencia de datos

Las tareas se almacenan en `localStorage`.  
Cualquier acción (agregar, editar, completar o eliminar) actualiza:

- El estado de la aplicación
- El almacenamiento local

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
3. Ejecutar el proyecto
   npm run dev


## 🌐 Deploy

El proyecto se encuentra deployado en:  
👉 (agregare link una vez finalizado)

## 📸 Capturas
Las capturas del proyecto se encuentran documentadas en el archivo:
👉 [Ver capturas del proyecto](./screenshots/screenshots.md)




