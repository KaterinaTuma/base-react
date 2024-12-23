import './styles/index.scss';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { usePhotos } from 'shared/stores';
import { useTodos } from 'shared/stores';
import { usePosts } from 'shared/stores';
import { HomePage } from 'pages';
import { PhotoPage } from 'pages';
import { PhotosPage } from 'pages';
import { TodoPage } from 'pages';
import { TodosPage } from 'pages';
import { PostPage } from 'pages';
import { PostsPage } from 'pages';
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
  const photosStore = usePhotos();
  const todosStore = useTodos();
  const postsStore = usePosts();

  useEffect(() => {
    photosStore.setPhotoCount(defaultCount);
    todosStore.setTodoCount(defaultCount);
    postsStore.setPostCount(defaultCount);
  }, []);

  return (
    <BrowserRouter>
      <div className={'app dark'}>
        <Header title={props.notatitle} />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/photos'} element={<PhotosPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/posts'} element={<PostsPage />} />
          <Route path={'/photo/:photoId'} element={<PhotoPage />} />
          <Route path={'/todo/:todoId'} element={<TodoPage />} />
          <Route path={'/post/:postId'} element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
