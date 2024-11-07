import classes from './Blog.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { usePosts } from 'shared/stores';
import { PostCounter } from 'features';
import { Posts } from 'features';
import { PostCreation } from 'features';
import { Preloader } from 'shared/ui';
import { Button } from 'shared/ui';

/**
 * @function Blog
 * @returns {JSX.Element}
 */

export const Blog = () => {
  const postsStore = usePosts();
  const [isPostCreationOpen, setIsPostCreationOpen] = useState(false);

  useEffect(() => {
    if (!postsStore.postCount) return;
    postsStore.getPosts(postsStore.postCount);
  }, [postsStore.postCount]);

  return (
    <div className={classes.blog}>
      <PostCounter name={'Post count'} />
      <Button type={'button'}
        onClick={() => setIsPostCreationOpen(true)}
      >
        {'Add post'}
      </Button>
      <Posts posts={postsStore.posts} />
      <Preloader isActive={postsStore.isPostsLoading} />
      <PostCreation isOpen={isPostCreationOpen}
        onClose={() => setIsPostCreationOpen(false)}
      />
    </div>
  );
};
