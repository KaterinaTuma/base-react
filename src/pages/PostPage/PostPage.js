import classes from './PostPage.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from 'shared/stores';
import { randomRGBA } from 'shared/utils';

/**
 * @function PostPage
 * @returns {JSX.Element}
 */

export const PostPage = () => {
  const params = useParams();
  const postsStore = usePosts();

  if (!params.postId) return <p>Invalid post id</p>;

  useEffect(() => {
    if (!params.postId) return;
    postsStore.getPostById(params.postId);
  }, []);

  if (!postsStore.post) return <p>Post not found</p>;

  const background = randomRGBA(1);

  return (
    <div className={classes.postPage}
      style={{ background }}
    >
      <h2>{postsStore.post.title}</h2>
      <p>{postsStore.post.body}</p>
    </div>
  );
};
