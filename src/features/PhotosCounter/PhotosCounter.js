import classes from './PhotosCounter.module.scss';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function PhotosCounter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const PhotosCounter = (props) => {
  const photosStore = usePhotos();

  const minCount = 0;
  const maxCount = 20;
  const isMinCount = props.count <= minCount;
  const isMaxCount = props.count >= maxCount;

  const handleDownClick = () => {
    if (isMinCount) return;
    props.setCount(props.count - 1);
    photosStore.getPhotos(props.count - 1);
  };

  const handleUpClick = () => {
    if (isMaxCount) return;
    props.setCount(props.count + 1);
    photosStore.getPhotos(props.count + 1);
  };

  const handleClearClick = () => {
    if (isMaxCount) return;
    props.setCount(0);
    photosStore.resetPhotos();
  };

  return (
    <div className={classes.counter}>
      <p className={classes.text}>
        {props.name}: {props.count}
      </p>
      <button className={classes.button}
        disabled={isMinCount}
        onClick={handleDownClick}
      >
        Down
      </button>
      <button className={classes.button}
        disabled={isMaxCount}
        onClick={handleUpClick}
      >
        Up
      </button>
      <button className={classes.button}
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
};
