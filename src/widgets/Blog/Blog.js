import classes from './Blog.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { usePosts } from 'shared/stores';
import { Post } from 'features';
import { Card } from 'entity';
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

  const handlePostCreationClose = () => {
    setIsPostCreationOpen(false);
    postsStore.getPosts(postsStore.postCount);
  };

  return (
    <>
      {/* Blog */}
      <div className={classes.blog}>
        {/* Counter */}
        <Post.Counter name={'Post count'} />
        {/* Create post button */}
        <Button type={'button'}
          onClick={() => setIsPostCreationOpen(true)}
        >
          {'Add post'}
        </Button>
        {/* Posts */}
        <ul className={classes.cards}>
          {postsStore.posts.map((post) => (
            <Card.Post key={post.id}
              post={post}
            />
          ))}
        </ul>
      </div>
      {/* Modals */}
      <Preloader isActive={postsStore.isPostsLoading} />
      <Post.Creator isOpen={isPostCreationOpen}
        onClose={handlePostCreationClose}
      />
    </>
  );
};
