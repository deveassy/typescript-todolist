import React from "react";
import TodoItem from "../TodoItem";

interface TodoItemListProps {
  todos: Array<Todo>;
  onToggle: ToggleTodo;
}

const TodoItemList: React.FC<TodoItemListProps> = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />;
      })}
    </ul>
  );
};

export default TodoItemList;
