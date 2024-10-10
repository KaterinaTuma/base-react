import { TodoDetails } from 'features/Todos/types';

export type TasksProps = {
  count: number;
  setCount: (count: number) => void;
  todos: TodoDetails[];
}
