import React, { ReactElement } from "react";

interface TodoItemProps {
  todo: Todo;
  onToggle: ToggleTodo;
  onRemove: RemoveTodo;
}
const TodoItem = (props: TodoItemProps): ReactElement => {
  const { todo, onToggle, onRemove } = props;

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
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
