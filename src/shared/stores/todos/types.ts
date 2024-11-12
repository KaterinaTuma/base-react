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
  Todo types
**********************************************/

export type TodoForCreate = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoForUpdate = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};

/**********************************************
  Store types
**********************************************/

export type TodosStore = {
  /* state for todo count */
  todoCount: number;
  setTodoCount: (todosCount: number) => void;

  /* state for getting todos */
  isTodosLoading: boolean;
  todos: TodoFromAPI[];
  todosLoadErrorMessage: string;
  getTodos: (count: number) => void;
  resetTodos: () => void;

  /* state for getting todo */
  isTodoLoading: boolean;
  todo: null | TodoFromAPI;
  todoLoadErrorMessage: string;
  getTodo: (todoId: string ) => void;
  resetTodo: () => void;

  /* state for create todo */
  isTodoCreating: boolean;
  isTodoCreated: boolean;
  todoCreateErrorMessage: string;
  createTodo: (todoForCreate: TodoForCreate) => void;
  resetTodoCreation: () => void;

  /* state for update todo */
  isTodoUpdating: boolean;
  isTodoUpdated: boolean;
  todoUpdateErrorMessage: string;
  updateTodo: (todoForUpdate: TodoForUpdate) => void;
  resetTodoUpdate: () => void;

  /* state for delete todo */
  isTodoDeleting: boolean;
  isTodoDeleted: boolean;
  todoDeleteErrorMessage: string;
  deleteTodo: (todoId: string) => void;
  resetTodoDeletion: () => void;
};

export type SetterCallback = (store: TodosStore) => TodosStore;
export type StoreCreator = (set: Function) => TodosStore;

/**********************************************/
