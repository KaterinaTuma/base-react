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
  const defaultCount = 3;
  const [photoCount, setPhotoCount] = useState(defaultCount);
  const [photos, setPhotos] = useState([]);
  const [todoCount, setTodoCount] = useState(defaultCount);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const endPoint = `photos?_start=0&_limit=${photoCount}`;
        const response = await fetch(`${API_BASE_URL}/${endPoint}`);
        if (!response.ok) throw new Error();
        const photos = await response.json();
        setPhotos(photos);
      } catch (/** @type {*} */ error) {
        console.error(error);
      }
    })();
  }, [photoCount]);

  useEffect(() => {
    (async () => {
      try {
        const endPoint = `todos?_start=0&_limit=${todoCount}`;
        const response = await fetch(`${API_BASE_URL}/${endPoint}`);
        if (!response.ok) throw new Error();
        const todos = await response.json();
        setTodos(todos);
      } catch (/** @type {*} */ error) {
        console.error(error);
      }
    })();
  }, [todoCount]);

  return (
    <div className={classes.app}>
      <h1>{props.title}</h1>
      <Gallery count={photoCount}
        setCount={setPhotoCount}
        photos={photos}
      />
      <Tasks count={todoCount}
        setCount={setTodoCount}
        todos={todos}
      />
    </div>
  );
};
