import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').PhotosStateCreator} StateCreator
 * @typedef {import('./types').PhotosState} State
 */

export const usePhotos = create(/** @type {StateCreator} */(set) => ({
  /* State for count */
  photoCount: 0,
  setPhotoCount: (photoCount) => set((/** @type {State} */state) => ({ ...state, photoCount })),
  /* State for photos */
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    try {
      set(() => ({ isPhotosLoading: true }));
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error('Photos not received');
      const photosData = await response.json();
      set(() => ({ photos: photosData }));
    } catch (/** @type {*} */ error) {
      set(() => ({ photosErrorMessage: error.message }));
    } finally {
      set(() => ({ isPhotosLoading: false }));
    };
  },
  resetPhotos: () => set((/** @type {State} */state) => ({ ...state, photos: [] })),
}));
