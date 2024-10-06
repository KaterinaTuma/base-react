export type TodoDetails = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosProps = {
  todos: TodoDetails[];
};
