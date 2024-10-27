import classes from './Counter.module.scss';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const minCount = props.minCount ? props.minCount : 0;
  const maxCount = props.maxCount ? props.maxCount : 20;
  const isMinCount = props.count <= minCount;
  const isMaxCount = props.count >= maxCount;

  const handleDownClick = () => {
    if (isMinCount) return;
    props.setCount(props.count - 1);
  };

  const handleUpClick = () => {
    if (isMaxCount) return;
    props.setCount(props.count + 1);
  };

  const handleResetClick = () => {
    props.setCount(minCount);
  };

  return (
    <div className={classes.counter}>
      {/* Title */}
      <p className={classes.title}>
        {props.name}: {props.count}
      </p>
      {/* Down */}
      <button className={classes.button}
        disabled={props.isDisabled || isMinCount}
        onClick={handleDownClick}
      >
        Down
      </button>
      {/* Up */}
      <button className={classes.button}
        disabled={props.isDisabled || isMaxCount}
        onClick={handleUpClick}
      >
        Up
      </button>
      {/* Reset */}
      <button className={classes.button}
        disabled={props.isDisabled}
        onClick={handleResetClick}
      >
        Reset
      </button>
    </div>
  );
};
