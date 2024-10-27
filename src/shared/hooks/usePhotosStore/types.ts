export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosStore = {
  /* Store for count */
  photoCount: number;
  setPhotoCount: (photoCount: number) => void;
  /* Store for photos */
  photos: PhotoFromAPI[] | [];
  isPhotosLoading: boolean;
  photosErrorMessage: string;
  getPhotos: (count: number) => void;
  resetPhotos: () => void;
  getPhotoById: (photos: PhotoFromAPI[], id: string) => PhotoFromAPI | undefined;
};

export type SetterCallback = (store: PhotosStore) => PhotosStore;

export type PhotosStoreCreator = (set: Function) => PhotosStore;
