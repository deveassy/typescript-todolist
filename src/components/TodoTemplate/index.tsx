import React, { useState } from "react";
import TodoItemList from "../TodoItemList";
import TodoForm from "../TodoForm";

const initialTodos: Array<Todo> = [
  {
    id: 1,
    text: "walk the dog",
    done: true,
  },
  {
    id: 2,
    text: "create the APP",
    done: false,
  },
];

function TodoTemplate() {
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle: ToggleTodo = (selectedTodo) => {
    // const newTodos = todos.map((todo) => {
    //   if (todo === selectedTodo) {
    //     return {
    //       ...todo,
    //       done: !todo.done,
    //     };
    //   }
    //   return todo;
    // });
    // setTodos(newTodos);
    setTodos(
      todos.map((todo) => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <TodoForm />
      <TodoItemList todos={todos} onToggle={handleToggle} />
    </div>
  );
}

export default TodoTemplate;
