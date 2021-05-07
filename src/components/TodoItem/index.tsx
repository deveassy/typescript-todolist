import React from "react";

type Todo = {
  id: number;
  text: string | number;
  done: boolean;
};
interface TodoItemProps {
  todo: Todo;
  // onToggle: () => void;
  onRemove: (id: number) => void;
}
const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo, onRemove } = props;
  return (
    <div key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={(): void => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
