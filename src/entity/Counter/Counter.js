import classes from './Counter.module.scss';
import { Button } from 'shared/ui';

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
      <Button mode={'default'}
        type={'button'}
        disabled={props.isDisabled || isMinCount}
        onClick={handleDownClick}
      >
        Down
      </Button>
      {/* Up */}
      <Button mode='default'
        type='button'
        disabled={props.isDisabled || isMaxCount}
        onClick={handleUpClick}
      >
        Up
      </Button>
      {/* Reset */}
      <Button mode='default'
        type='button'
        disabled={props.isDisabled}
        onClick={handleResetClick}
      >
        Reset
      </Button>
    </div>
  );
};
