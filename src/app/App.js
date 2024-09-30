import './App.css';
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
  return (
    <div className="app">
      <h1>{props.title}</h1>
      <Counter minNum={30}
        startNum={30}
        maxNum={35}
      />
    </div>
  );
};
