import { PhotoDetails } from 'features/Photos/types';

export type GalleryProps = {
  count: number;
  setCount: Function;
  photos: PhotoDetails[];
}
