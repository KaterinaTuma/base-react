/**********************************************
  Response types
**********************************************/

export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

/**********************************************
  Photos types
**********************************************/

export type PhotosStore = {
  /* state for photo count */
  photoCount: number;
  setPhotoCount: (photoCount: number) => void;

  /* state for photos store */
  isPhotosLoading: boolean;
  photos: PhotoFromAPI[] | [];
  photosErrorMessage: string;
  getPhotos: (count: number) => void;
  resetPhotos: () => void;

  /* state for photo store */
  isPhotoLoading: boolean;
  photo: PhotoFromAPI | null;
  photoErrorMessage: string;
  getPhotoById: (photoId: string | number) => void;
  resetPhoto: () => void;
};

export type SetterCallback = (store: PhotosStore) => PhotosStore;
export type StoreCreator = (set: Function) => PhotosStore;

/**********************************************/
