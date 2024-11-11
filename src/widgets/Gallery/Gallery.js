import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { usePhotos } from 'shared/stores';
import { Card } from 'entity';
import { PhotoCounter } from 'features';
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
      {/* Counter */}
      <PhotoCounter name={'Photos count'} />
      {/* Photos */}
      <ul className={classes.cards}>
        {photosStore.photos.map((photo) => (
          <Card.Photo key={photo.id}
            photo={photo}
          />
        ))}
      </ul>
      <Preloader isActive={photosStore.isPhotosLoading} />
    </div>
  );
};
