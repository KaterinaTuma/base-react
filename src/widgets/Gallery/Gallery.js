import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { usePhotos } from 'shared/hooks';
import { PhotosCounter, Photos } from 'features';
import { Preloader } from 'shared/ui';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photosState = usePhotos();

  useEffect(() => {
    if (!photosState.photoCount) return;
    photosState.getPhotos(photosState.photoCount);
  }, [photosState.photoCount]);

  return (
    <div className={classes.gallery}>
      <PhotosCounter name={'Photos count'} />
      <Photos photos={photosState.photos} />
      {photosState.isPhotosLoading ? <Preloader /> : null}
    </div>
  );
};
