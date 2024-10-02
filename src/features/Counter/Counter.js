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

  // const isMinNum = count <= props.minNum;
  // const isMaxNum = count >= props.maxNum;

  const handleDownClick = () => {
    // if (isMinNum) return;
    props.setCount(props.count - 1);
  };

  const handleUpClick = () => {
    // if (isMaxNum) return;
    props.setCount(props.count + 1);
  };

  return (
    <div className={'counter'}>
      <p className={'counter__copy'}>
        Count: {props.count}
      </p>
      <button className={'counter__button'}
        // disabled={isMinNum}
        onClick={handleDownClick}
      >
        Down
      </button>
      <button className={'counter__button'}
        // disabled={isMaxNum}
        onClick={handleUpClick}
      >
        Up
      </button>
    </div>
  );
};
