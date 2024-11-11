import classes from './PostPage.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from 'features';
import { usePosts } from 'shared/stores';
import { Button, Preloader } from 'shared/ui';
import { randomRGBA } from 'shared/utils';
import { IconDelete, IconEdit } from 'shared/icons';

/**
 * @function PostPage
 * @returns {JSX.Element | null}
 */

export const PostPage = () => {
  const params = useParams();
  const postsStore = usePosts();
  const [isPostUpdateOpen, setIsPostUpdateOpen] = useState(false);
  const [isPostDeletionOpen, setIsPostDeletionOpen] = useState(false);

  if (!params.postId) return <p>Invalid post id</p>;

  useEffect(() => {
    if (!params.postId) return;
    postsStore.getPost(params.postId);
  }, [params.postId]);

  const handlePostUpdateClose = () => {
    setIsPostUpdateOpen(false);
    if (params.postId) postsStore.getPost(params.postId);
  };

  const handlePostDeletionClose = () => {
    setIsPostDeletionOpen(false);
    if (params.postId) postsStore.getPost(params.postId);
  };

  if (!postsStore.post && postsStore.isPostLoading) return <Preloader isActive={postsStore.isPostLoading} />;
  if (!postsStore.post) return <p>{postsStore.postLoadErrorMessage}</p>;

  const background = localStorage.getItem(params.postId) || randomRGBA(1);

  return (
    <>
      {/* Post page */}
      <div className={classes.postPage}
        style={{ background }}
      >
        <h2 className={classes.label}>{postsStore.post.title}</h2>
        <p>{postsStore.post.body}</p>
        <div className={classes.buttons}>
          <Button mode={'default'}
            type={'button'}
            onClick={() => setIsPostUpdateOpen(true)}
          >
            <IconEdit />
          </Button>
          <Button mode={'default'}
            type={'button'}
            onClick={() => setIsPostDeletionOpen(true)}
          >
            <IconDelete />
          </Button>
        </div>
      </div>
      {/* Modals */}
      <Post.Editor isOpen={isPostUpdateOpen}
        onClose={handlePostUpdateClose}
      />
      <Post.Deleter isOpen={isPostDeletionOpen}
        onClose={handlePostDeletionClose}
      />
    </>
  );
};
