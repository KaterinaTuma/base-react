import classes from './Counter.module.scss';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const photosStore = usePhotos();

  const defaultCount = 3;
  const isMinNum = props.count <= 0;
  const isMaxNum = props.count >= 20;

  const handleDownClick = () => {
    photosStore.getPhotos(defaultCount);
    // if (isMinNum) return;
    // props.setCount(props.count - 1);
  };

  const handleUpClick = () => {
    photosStore.resetPhotos();
    // if (isMaxNum) return;
    // props.setCount(props.count + 1);
  };

  return (
    <div className={classes.counter}>
      <p className={classes.text}>
        {props.name}: {props.count}
      </p>
      <button className={classes.button}
        disabled={isMinNum}
        onClick={handleDownClick}
      >
        Down
      </button>
      <button className={classes.button}
        disabled={isMaxNum}
        onClick={handleUpClick}
      >
        Up
      </button>
    </div>
  );
};
