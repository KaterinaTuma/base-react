export type TodoFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodosStore = {
  /* Store for count */
  todoCount: number;
  setTodoCount: (todosCount: number) => void;
  /* Store for todos */
  todos: TodoFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;
};

export type SetterCallback = (store: TodosStore) => TodosStore;

export type TodosStoreCreator = (set: Function) => TodosStore;
