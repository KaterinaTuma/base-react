import classes from './App.module.scss';
import { useEffect } from 'react';
import { usePhotosStore, useTodosStore } from 'shared/hooks';
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
  const photosStore = usePhotosStore();
  const todosStore = useTodosStore();

  useEffect(() => {
    photosStore.setPhotoCount(defaultCount);
    todosStore.setTodoCount(defaultCount);
  }, []);

  return (
    <div className={classes.app}>
      <h1>{props.title}</h1>
      <Gallery />
      <Tasks />
    </div>
  );
};
