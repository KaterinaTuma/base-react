import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').PhotosStore} PhotosStore
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 */

/**
 * @function setPhotoCount
 * @param {Function} set
 * @param {number} photoCount
 * @returns {void}
 */

const setPhotoCount = (set, photoCount) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    photoCount,
  }));
};

/**
 * @function getPhotos
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getPhotos = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotosLoading: true,
      photos: [],
      photoErrorMessage: '',
    }));
    const endPoint = `photos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Photos not received');
    const photos = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotosLoading: false,
      photos,
      photoErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotosLoading: false,
      photos: [],
      photosErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetPhotos
 * @param {Function} set
 * @returns {void}
 */

const resetPhotos = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    photos: [],
  }));
};

/**
 * @function getPhotoById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getPhotoById = async (set, id) => {
  try {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotoLoading: true,
      photo: null,
      photoErrorMessage: '',
    }));
    const endPoint = `photos/${id}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Photo not received');
    const photo = await response.json();
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotoLoading: false,
      photo,
      photoErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */ (store) => ({
      ...store,
      isPhotoLoading: false,
      photo: null,
      photoErrorMessage: error.message,
    }));
  };
};

/**
 * @function resetPhoto
 * @param {Function} set
 * @returns {void}
 */

const resetPhoto = (set) => {
  set(/** @type {SetterCallback} */ (store) => ({
    ...store,
    photo: null,
  }));
};

/**
 * @function usePhotos
 * @returns {PhotosStore} PhotosStore
 */

export const usePhotos = create(/** @type {StoreCreator} */ (set) => ({
  /* state for photo count */
  photoCount: 0,
  setPhotoCount: partial(setPhotoCount, set),

  /* state for photos store */
  isPhotosLoading: false,
  photos: [],
  photosErrorMessage: '',
  getPhotos: partial(getPhotos, set),
  resetPhotos: partial(resetPhotos, set),

  /* state for photo store */
  isPhotoLoading: false,
  photo: null,
  photoErrorMessage: '',
  getPhotoById: partial(getPhotoById, set),
  resetPhoto: partial(resetPhoto, set),
}));
