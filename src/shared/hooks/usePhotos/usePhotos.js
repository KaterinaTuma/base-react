import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').PhotosStateCreator} StateCreator
 */

export const usePhotos = create(/** @type {StateCreator} */(set) => ({
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    try {
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      if (!response.ok) throw new Error();
      const photosData = await response.json();
      set(() => ({ photos: photosData }));
    } catch (error) {
      set(() => ({ photosErrorMessage: error }));
    };
  },
  resetPhotos: () => set(() => ({ photos: [] })),
}));
