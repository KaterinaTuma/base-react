import { usePhotosStore } from 'shared/hooks';
import { Counter } from 'entity';

/**
 * @typedef {import('./types').PhotoCounterProps} Props
 */

/**
 * @function PhotoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PhotoCounter = (props) => {
  const photosStore = usePhotosStore();

  return (
    <Counter name={props.name}
      minCount={5}
      count={photosStore.photoCount}
      maxCount={15}
      setCount={photosStore.setPhotoCount}
    />
  );
};
