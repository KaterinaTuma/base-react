import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').TodosStateCreator} StateCreator
 */

export const useTodos = create(/** @type {StateCreator} */(set) => ({
  todos: [],
  isTodosLoading: false,
  todosErrorMessage: '',
  getTodos: async (count) => {
    try {
      const endPoint = `todos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error();
      const todosData = await response.json();
      set(() => ({ todos: todosData }));
    } catch (error) {
      set(() => ({ todosErrorMessage: error }));
    };
  },
  resetTodos: () => set(() => ({ todos: [] })),
}));
