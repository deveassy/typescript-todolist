import React, { ReactElement, MouseEvent, ButtonHTMLAttributes } from "react";

interface TodoItemProps {
  todo: Todo;
  onToggle: ToggleTodo;
  // onRemove: (id: number) => void;
}
const TodoItem = (props: TodoItemProps): ReactElement => {
  const { todo, onToggle } = props;

  return (
    <div>
      {/* <div key={todo.id}> */}
      {/* <button
      onCliCk={(e: MouseEvent<HTMLButtonElement>) => {
        onToggle(id);
      }}
      >
        <img src="./img/check.png" />
      </button> */}
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={() => onToggle(todo)}
      >
        {todo.text}
      </span>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
