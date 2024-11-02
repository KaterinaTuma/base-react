import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').PostsStore} PostsStore
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 */

/**
 * @function setPostCount
 * @param {Function} set
 * @param {number} postCount
 * @returns {void}
 */

const setPostCount = (set, postCount) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    postCount,
  }));
};

/**
 * @function getPosts
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getPosts = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostsLoading: true,
      posts: [],
      postsErrorMessage: '',
    }));
    const endPoint = `posts?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('posts not received');
    const posts = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostsLoading: false,
      posts,
      postsErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostsLoading: false,
      posts: [],
      postsErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetPosts
 * @param {Function} set
 * @returns {void}
 */

const resetPosts = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    posts: [],
  }));
};

/**
 * @function getPostById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getPostById = async (set, id) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostLoading: true,
      post: null,
      postErrorMessage: '',
    }));
    const endPoint = `posts/${id}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('post not received');
    const post = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostLoading: false,
      post,
      postErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPostLoading: false,
      post: null,
      postErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetPost
 * @param {Function} set
 * @returns {void}
 */

const resetPost = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    post: null,
  }));
};

/**
 * @function usePosts
 * @returns {postsStore} postsStore
 */

export const usePosts = create(/** @type {StoreCreator} */ (set) => ({
  /* state for post count */
  postCount: 0,
  setPostCount: partial(setPostCount, set),

  /* state for posts store */
  isPostsLoading: false,
  posts: [],
  postsErrorMessage: '',
  getPosts: partial(getPosts, set),
  resetPosts: partial(resetPosts, set),

  /* state for post store */
  isPostLoading: false,
  post: null,
  postErrorMessage: '',
  getPostById: partial(getPostById, set),
  resetPost: partial(resetPost, set),
}));
