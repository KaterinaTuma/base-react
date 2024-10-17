export type TodoFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosStore = {
  todos: TodoFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;
};

export type TodosStateCreator = (set: Function) => TodosStore;
