import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').TodosStore} TodoStore
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 */

/**
 * @function setTodoCount
 * @param {Function} set
 * @param {number} todoCount
 * @returns {void}
 */

const setTodoCount = (set, todoCount) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    todoCount,
  }));
};

/**
 * @function getTodos
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getTodos = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: true,
      todos: [],
      todosErrorMessage: '',
    }));
    const endPoint = `todos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todos not received');
    const todos = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: false,
      todos,
      todoErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: false,
      todos: [],
      todosErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetTodos
 * @param {Function} set
 * @returns {void}
 */

const resetTodos = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    todos: [],
  }));
};

/**
 * @function getTodoById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getTodoById = async (set, id) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoLoading: true,
      todo: null,
      todoErrorMessage: '',
    }));
    const endPoint = `todos/${id}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todo not received');
    const todo = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoLoading: false,
      todo,
      todoErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoLoading: false,
      todo: null,
      todoErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetTodo
 * @param {Function} set
 * @returns {void}
 */

const resetTodo = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    todo: null,
  }));
};

/**
 * @function useTodos
 * @returns {TodosStore}
 */

export const useTodos = create(/** @type {StoreCreator} */ (set) => ({
  /* state for todo count */
  todoCount: 0,
  setTodoCount: partial(setTodoCount, set),

  /* state for todos store */
  isTodosLoading: false,
  todos: [],
  todosErrorMessage: '',
  getTodos: partial(getTodos, set),
  resetTodos: partial(resetTodos, set),

  /* state for todo store */
  isTodoLoading: false,
  todo: null,
  todoErrorMessage: '',
  getTodoById: partial(getTodoById, set),
  resetTodo: partial(resetTodo, set),
}));
