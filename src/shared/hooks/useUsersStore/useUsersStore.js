import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').UsersStoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} Setter
 * @typedef {import('./types').UsersStore} Store
 */

export const useUsersStore = create(/** @type {StoreCreator} */(set) => ({
  /* Store for count */
  userCount: 0,
  setUserCount: (userCount) => set(/** @type {Setter} */(store) => ({ ...store, userCount })),
  /* Store for photos */
  users: [],
  isUsersLoading: false,
  usersErrorMessage: '',
  getUsers: async (count) => {
    try {
      set(/** @type {Setter} */(store) => ({ ...store, isUsersLoading: true }));
      const endPoint = `users?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error('Users not received');
      const usersData = await response.json();
      set(/** @type {Setter} */(store) => ({ ...store, users: usersData }));
    } catch (/** @type {*} */ error) {
      set(/** @type {Setter} */(store) => ({ ...store, usersErrorMessage: error.message }));
    } finally {
      set(/** @type {Setter} */(store) => ({ ...store, isUsersLoading: false }));
    };
  },
  resetUsers: () => set(/** @type {Setter} */(store) => ({ ...store, users: [] })),
  getUserById: (users, id) => users
    .find((user) => user.id === Number(id)),
}));
