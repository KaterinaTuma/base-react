import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { usePhotos } from 'shared/stores';
import { PhotoCounter, Photos } from 'features';
import { Preloader } from 'shared/ui';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photosStore = usePhotos();

  useEffect(() => {
    if (!photosStore.photoCount) return;
    photosStore.getPhotos(photosStore.photoCount);
  }, [photosStore.photoCount]);

  return (
    <div className={classes.gallery}>
      <PhotoCounter name={'Photos count'} />
      <Photos photos={photosStore.photos} />
      <Preloader isActive={photosStore.isPhotosLoading} />
    </div>
  );
};
