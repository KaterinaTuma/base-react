import './App.css';

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
    </div>
  );
};
