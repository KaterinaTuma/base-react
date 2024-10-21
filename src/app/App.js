import classes from './App.module.scss';
import { useEffect } from 'react';
import { usePhotos, useTodos } from 'shared/hooks';
import { Gallery, Tasks } from 'widgets';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const defaultCount = 5;
  const photosState = usePhotos();
  const todosState = useTodos();

  useEffect(() => {
    photosState.setPhotoCount(defaultCount);
    todosState.setTodosCount(defaultCount);
  }, []);

  return (
    <div className={classes.app}>
      <h1>{props.title}</h1>
      <Gallery />
      <Tasks />
    </div>
  );
};
