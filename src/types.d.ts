type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type AddTodo = (newTodo: string) => void;

type ToggleTodo = (id: number) => void;

type RemoveTodo = (id: number) => void;
