import React from "react";
import TodoItem from "../TodoItem";

interface TodoItemListProps {
  todos: Array<Todo>;
  onToggle: ToggleTodo;
  onRemove: RemoveTodo;
}

const TodoItemList: React.FC<TodoItemListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        );
      })}
    </ul>
  );
};

export default TodoItemList;
