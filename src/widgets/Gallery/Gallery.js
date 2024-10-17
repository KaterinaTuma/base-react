import classes from './Gallery.module.scss';
import { PhotosCounter, Photos } from 'features';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').GalleryProps} GalleryProps
 */

/**
 * @function Gallery
 * @param {GalleryProps} props
 * @returns {JSX.Element}
 */

export const Gallery = (props) => {
  const photosStore = usePhotos();

  return (
    <div className={classes.gallery}>
      <PhotosCounter name={'Photo count'}
        count={props.count}
        setCount={props.setCount}
      />
      <Photos photos={photosStore.photos}/>
    </div>
  );
};
