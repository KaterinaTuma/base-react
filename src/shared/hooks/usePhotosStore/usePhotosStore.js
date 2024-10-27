import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').PhotosStoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} Setter
 * @typedef {import('./types').PhotosStore} Store
 */

export const usePhotosStore = create(/** @type {StoreCreator} */(set) => ({
  /* Store for count */
  photoCount: 0,
  setPhotoCount: (photoCount) => set(/** @type {Setter} */(store) => ({ ...store, photoCount })),
  /* Store for photos */
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    try {
      set(/** @type {Setter} */(store) => ({ ...store, isPhotosLoading: true }));
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error('Photos not received');
      const photosData = await response.json();
      set(/** @type {Setter} */(store) => ({ ...store, photos: photosData }));
    } catch (/** @type {*} */ error) {
      set(/** @type {Setter} */(store) => ({ ...store, photosErrorMessage: error.message }));
    } finally {
      set(/** @type {Setter} */(store) => ({ ...store, isPhotosLoading: false }));
    };
  },
  resetPhotos: () => set(/** @type {Setter} */(store) => ({ ...store, photos: [] })),
  getPhotoById: (photos, id) => photos
    .find((photo) => photo.id === Number(id)),
}));
