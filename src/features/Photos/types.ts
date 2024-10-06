export type PhotoDetails = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotosProps = {
  photos: PhotoDetails[];
};
