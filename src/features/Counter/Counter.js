import './Counter.css';
import { useState } from 'react';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const [count, setCount] = useState(props.startNum);
  const isMinNum = count <= props.minNum;
  const isMaxNum = count >= props.maxNum;

  const handleDownClick = () => {
    if (isMinNum) return;
    setCount(count - 1);
  };

  const handleUpClick = () => {
    if (isMaxNum) return;
    setCount(count + 1);
  };

  const handleClearClick = () => setCount(props.startNum);

  return (
    <div className='counter'>
      <p className='counter__copy'>
        Count: {count}
      </p>
      <button className='counter__button'
        disabled={isMinNum}
        onClick={handleDownClick}
      >
        Down
      </button>
      <button className='counter__button'
        disabled={isMaxNum}
        onClick={handleUpClick}
      >
        Up
      </button>
      <button className='counter__button'
        disabled={count === props.startNum}
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
};
