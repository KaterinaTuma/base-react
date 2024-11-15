import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';
import { partial } from 'shared/utils';
import { genQueryOpts } from 'shared/utils';

/**
 * @typedef {import('./types').TodosStore} TodoStore
 * @typedef {import('./types').TodoForCreate} TodoForCreate
 * @typedef {import('./types').TodoForUpdate} TodoForUpdate
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
      todosLoadErrorMessage: '',
    }));
    const endPoint = `todos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todos not received');
    const todos = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: false,
      todos,
      todosLoadErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodosLoading: false,
      todos: [],
      todosLoadErrorMessage: error.message,
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
 * @function getTodo
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getTodo = async (set, id) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoLoading: true,
      todo: null,
      todoLoadErrorMessage: '',
    }));
    const endPoint = `todos/${id}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Todo not received');
    const todo = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoLoading: false,
      todo,
      todoLoadErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoLoading: false,
      todo: null,
      todoLoadErrorMessage: error.message,
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
 * @function createTodo
 * @param {Function} set
 * @param {TodoForCreate} todoForCreate
 * @returns {Promise<void>}
 */

const createTodo = async (set, todoForCreate) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoCreating: true,
      isTodoCreated: false,
      todoCreateErrorMessage: '',
    }));
    const queryOpts = genQueryOpts('POST', todoForCreate);
    const endPoint = `todos`;
    const queryURL = `${API_BASE_URL}/${endPoint}`;
    const response = await fetch(queryURL, queryOpts);
    if (!response.ok) throw new Error('Failed to create todo');
    const resData = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoCreating: false,
      isTodoCreated: Boolean(resData),
      todoCreateErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    const message = error.message;
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoCreating: false,
      isTodoCreated: false,
      todoCreateErrorMessage: message,
    }));
  };
};

/**
 * @function resetTodoCreation
 * @param {Function} set
 * @returns {void}
 */

const resetTodoCreation = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    isTodoCreating: false,
    isTodoCreated: false,
    todoCreateErrorMessage: '',
  }));
};

/**
 * @function updateTodo
 * @param {Function} set
 * @param {TodoForUpdate} todoForUpdate
 * @returns {Promise<void>}
 */

const updateTodo = async (set, todoForUpdate) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoUpdating: true,
      isTodoUpdated: false,
      todoUpdateErrorMessage: '',
    }));
    const queryOpts = genQueryOpts('PUT', todoForUpdate);
    const endPoint = `todos/${todoForUpdate.id}`;
    const queryURL = `${API_BASE_URL}/${endPoint}`;
    const response = await fetch(queryURL, queryOpts);
    if (!response.ok) throw new Error('Failed to update todo');
    const resData = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoUpdating: false,
      isTodoUpdated: Boolean(resData),
      todoUpdateErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    const message = error.message;
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoUpdating: false,
      isTodoUpdated: false,
      todoUpdateErrorMessage: message,
    }));
  };
};

/**
 * @function resetTodoUpdate
 * @param {Function} set
 * @returns {void}
 */

const resetTodoUpdate = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    isTodoUpdating: false,
    isTodoUpdated: false,
    todoUpdateErrorMessage: '',
  }));
};

/**
 * @function deleteTodo
 * @param {Function} set
 * @param {string} todoId
 * @returns {Promise<void>}
 */

const deleteTodo = async (set, todoId) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoDeleting: true,
      isTodoDeleted: false,
      todoDeleteErrorMessage: '',
    }));
    const queryOpts = genQueryOpts('DELETE');
    const endPoint = `todos/${todoId}`;
    const queryURL = `${API_BASE_URL}/${endPoint}`;
    const response = await fetch(queryURL, queryOpts);
    if (!response.ok) throw new Error('Failed to delete todo');
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoDeleting: false,
      isTodoDeleted: response.ok,
      todoDeleteErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    const message = error.message;
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isTodoDeleting: false,
      isTodoDeleted: false,
      todoDeleteErrorMessage: message,
    }));
  };
};

/**
 * @function resetTodoDeletion
 * @param {Function} set
 * @returns {void}
 */

const resetTodoDeletion = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    isTodoDeleting: false,
    isTodoDeleted: false,
    todoDeleteErrorMessage: '',
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

  /* state for getting todos */
  isTodosLoading: false,
  todos: [],
  todosLoadErrorMessage: '',
  getTodos: partial(getTodos, set),
  resetTodos: partial(resetTodos, set),

  /* state for getting todo */
  isTodoLoading: false,
  todo: null,
  todoLoadErrorMessage: '',
  getTodo: partial(getTodo, set),
  resetTodo: partial(resetTodo, set),

  /* state for create todo */
  isTodoCreating: false,
  isTodoCreated: false,
  todoCreateErrorMessage: '',
  createTodo: partial(createTodo, set),
  resetTodoCreation: partial(resetTodoCreation, set),

  /* state for update todo */
  isTodoUpdating: false,
  isTodoUpdated: false,
  todoUpdateErrorMessage: '',
  updateTodo: partial(updateTodo, set),
  resetTodoUpdate: partial(resetTodoUpdate, set),

  /* state for delete todo */
  isTodoDeleting: false,
  isTodoDeleted: false,
  todoDeleteErrorMessage: '',
  deleteTodo: partial(deleteTodo, set),
  resetTodoDeletion: partial(resetTodoDeletion, set),
}));
