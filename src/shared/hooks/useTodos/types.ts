export type TodoFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosState = {
  /* State for count */
  todosCount: number;
  setTodosCount: (todosCount: number) => void;
  /* State for todos */
  todos: TodoFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;
};

export type TodosStateCreator = (set: Function) => TodosState;
