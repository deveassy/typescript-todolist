import React, { useRef, useState } from "react";
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

  const nextId = useRef(0);

  const handleToggle: ToggleTodo = (id) => {
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

    // setTodos(
    //   todos.map((todo) => {
    //     if (todo === todo.id) {
    //       return {
    //         ...todo,
    //         done: !todo.done,
    //       };
    //     }
    //     return todo;
    //   })
    // );

    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  // const addTodo = (newTodo: Todo) => {
  //   setTodos([...todos, newTodo]);
  // };

  const addTodo: AddTodo = (newTodo) => {
    // setTodos([...todos, {id: nextId, text: newTodo, done: false}]);
    const todo = {
      id: nextId.current,
      text: newTodo,
      done: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const handleRemove: RemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </div>
  );
}

export default TodoTemplate;
