import classes from './Blog.module.scss';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
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
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);

  useEffect(() => {
    if (!postsStore.postCount) return;
    postsStore.getPosts(postsStore.postCount);
  }, [postsStore.postCount]);

  const handleCreatorClose = () => {
    setIsCreatorOpen(false);
    postsStore.getPosts(postsStore.postCount);
  };

  if (postsStore.postsLoadErrorMessage) return <p>{postsStore.postsLoadErrorMessage}</p>;

  return (
    <>
      {/* Blog */}
      <div className={classes.blog}>
        {/* Counter */}
        <Post.Counter name={'Post count'} />
        {/* Button */}
        <Button type={'button'}
          onClick={() => setIsCreatorOpen(true)}
        >
          Create post
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
      <Post.Creator isOpen={isCreatorOpen}
        onClose={handleCreatorClose}
      />
    </>
  );
};
