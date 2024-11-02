import classes from './Blog.module.scss';
import { useEffect } from 'react';
import { usePosts } from 'shared/stores';
import { PostCounter } from 'features';
import { Posts } from 'features';
import { Actions } from 'features';
import { Preloader } from 'shared/ui';

/**
 * @function Blog
 * @returns {JSX.Element}
 */

export const Blog = () => {
  const postsStore = usePosts();

  useEffect(() => {
    if (!postsStore.postCount) return;
    postsStore.getPosts(postsStore.postCount);
  }, [postsStore.postCount]);

  return (
    <div className={classes.blog}>
      <PostCounter name={'Photos count'} />
      <Actions />
      <Posts posts={postsStore.posts} />
      <Preloader isActive={postsStore.isPostsLoading} />
    </div>
  );
};
