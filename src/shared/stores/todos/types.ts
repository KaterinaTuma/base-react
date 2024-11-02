/**********************************************
  Response types
**********************************************/

export type TodoFromAPI = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

/**********************************************
  Todos types
**********************************************/

export type TodosStore = {
  /* state for todo count */
  todoCount: number;
  setTodoCount: (todosCount: number) => void;

  /* state for todos store */
  todos: TodoFromAPI[] | [];
  isTodosLoading: boolean;
  todosErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;

  /* state for todo store */
  isTodoLoading: boolean;
  todo: TodoFromAPI | null;
  todoErrorMessage: string;
  getTodoById: (todoId: string | number) => void;
  resetTodo: () => void;
};

export type SetterCallback = (store: TodosStore) => TodosStore;
export type StoreCreator = (set: Function) => TodosStore;

/**********************************************/
