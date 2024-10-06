import './Counter.css';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const isMinNum = props.count <= 0;
  const isMaxNum = props.count >= 20;

  const handleDownClick = () => {
    if (isMinNum) return;
    props.setCount(props.count - 1);
  };

  const handleUpClick = () => {
    if (isMaxNum) return;
    props.setCount(props.count + 1);
  };

  return (
    <div className={'counter'}>
      <p className={'counter__copy'}>
        {props.name}: {props.count}
      </p>
      <button className={'counter__button'}
        disabled={isMinNum}
        onClick={handleDownClick}
      >
        Down
      </button>
      <button className={'counter__button'}
        disabled={isMaxNum}
        onClick={handleUpClick}
      >
        Up
      </button>
    </div>
  );
};
