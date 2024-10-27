import classes from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { usePhotosStore, useTodosStore, useUsersStore } from 'shared/hooks';
import { HomePage, PhotoPage, PhotosPage, TodoPage, TodosPage, UserPage, UsersPage } from 'pages';
import { Header } from 'widgets';

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
  const usersStore = useUsersStore();

  useEffect(() => {
    photosStore.setPhotoCount(defaultCount);
    todosStore.setTodoCount(defaultCount);
    usersStore.setUserCount(defaultCount);
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header title={props.title}/>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/photos'} element={<PhotosPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/users'} element={<UsersPage />} />
          <Route path={'/photo/:photoId/'} element={<PhotoPage />} />
          <Route path={'/todo/:todoId'} element={<TodoPage />} />
          <Route path={'/user/:userId'} element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
