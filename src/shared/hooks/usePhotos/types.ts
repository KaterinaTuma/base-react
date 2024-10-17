export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosStore = {
  photos: PhotoFromAPI[] | [];
  isPhotosLoading: boolean;
  photosErrorMessage: string;
  getPhotos: (count: number) => void;
  resetPhotos: () => void;
};

export type PhotosStateCreator = (set: Function) => PhotosStore;
