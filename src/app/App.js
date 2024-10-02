import './App.css';
import { useState } from 'react';
import { Counter } from 'features';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const [count, setCount] = useState(3);

  return (
    <div className={'app'}>
      <h1>{props.title}</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};
