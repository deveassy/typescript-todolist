type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;
