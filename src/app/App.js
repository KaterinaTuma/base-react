import classes from './App.module.scss';
import { useState, useEffect } from 'react';
import { Gallery, Tasks } from 'widgets';
import { API_BASE_URL } from 'shared/config';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const defaultCount = 0;
  const [photoCount, setPhotoCount] = useState(defaultCount);
  const [todoCount, setTodoCount] = useState(defaultCount);

  return (
    <div className={classes.app}>
      <h1>{props.title}</h1>
      <Gallery count={photoCount}
        setCount={setPhotoCount}
      />
      <Tasks count={todoCount}
        setCount={setTodoCount}
      />
    </div>
  );
};
