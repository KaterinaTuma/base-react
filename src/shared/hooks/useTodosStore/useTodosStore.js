import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').TodosStoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} Setter
 * @typedef {import('./types').TodosStore} Store
 */

export const useTodosStore = create(/** @type {StoreCreator} */(set) => ({
  /* Store for count */
  todoCount: 0,
  setTodoCount: (todoCount) => set((/** @type {Store} */store) => ({ ...store, todoCount })),
  /* Store for todos */
  todos: [],
  isTodosLoading: false,
  todosErrorMessage: '',
  getTodos: async (count) => {
    try {
      set(/** @type {Setter} */(store) => ({ ...store, isTodosLoading: true }));
      const endPoint = `todos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error('Todos not received');
      const todosData = await response.json();
      set(/** @type {Setter} */(store) => ({ ...store, todos: todosData }));
    } catch (/** @type {*} */ error) {
      set(/** @type {Setter} */(store) => ({ ...store, todosErrorMessage: error.message }));
    } finally {
      set(/** @type {Setter} */(store) => ({ ...store, isTodosLoading: false }));
    };
  },
  resetTodos: () => set(/** @type {Setter} */(store) => ({ ...store, todos: [] })),
  getTodoById: (todos, id) => todos
    .find((todo) => todo.id === Number(id)),
}));
