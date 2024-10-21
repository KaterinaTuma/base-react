import { usePhotos } from 'shared/hooks';
import { Counter } from 'entity';

/**
 * @typedef {import('./types').PhotosCounterProps} Props
 */

/**
 * @function PhotosCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PhotosCounter = (props) => {
  const photosState = usePhotos();

  return (
    <Counter name={props.name}
      minCount={5}
      count={photosState.photoCount}
      maxCount={15}
      setCount={photosState.setPhotoCount}
    />
  );
};
