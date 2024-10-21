import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').TodosStateCreator} StateCreator
 * @typedef {import('./types').TodosState} State
 */

export const useTodos = create(/** @type {StateCreator} */(set) => ({
  /* State for count */
  todosCount: 0,
  setTodosCount: (todosCount) => set((/** @type {State} */state) => ({ ...state, todosCount })),
  /* State for todos */
  todos: [],
  isTodosLoading: false,
  todosErrorMessage: '',
  getTodos: async (count) => {
    try {
      set(() => ({ isTodosLoading: true }));
      const endPoint = `todos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error('Todos not received');
      const todosData = await response.json();
      set(() => ({ todos: todosData }));
    } catch (/** @type {*} */ error) {
      set(() => ({ todosErrorMessage: error.message }));
    } finally {
      set(() => ({ isTodosLoading: false }));
    };
  },
  resetTodos: () => set((/** @type {State} */state) => ({ ...state, todos: [] })),
}));
