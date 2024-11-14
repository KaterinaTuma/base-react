import classes from './PostPage.module.scss';
import { useParams } from 'react-router-dom';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from 'features';
import { Modal } from 'shared/ui';
import { Button } from 'shared/ui';
import { Preloader } from 'shared/ui';
import { IconDelete } from 'shared/icons';
import { IconEdit } from 'shared/icons';
import { randomRGBA } from 'shared/utils';

/**
 * @function PostPage
 * @returns {JSX.Element | null}
 */

export const PostPage = () => {
  const params = useParams();
  const postsStore = usePosts();
  const [isPostUpdateOpen, setIsPostUpdateOpen] = useState(false);
  const [isPostDeletionOpen, setIsPostDeletionOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();


  if (!params.postId) return <p>Invalid post id</p>;

  useEffect(() => {
    if (!params.postId) return;
    postsStore.getPost(params.postId);
  }, [params.postId]);

  useEffect(() => {
    if (postsStore.isPostUpdated ||
      postsStore.postUpdateErrorMessage ||
      postsStore.isPostDeleted ||
      postsStore.postDeleteErrorMessage
    ) {
      setIsModalOpen(true);
    }
  }, [postsStore.isPostUpdated,
    postsStore.postUpdateErrorMessage,
    postsStore.isPostDeleted,
    postsStore.postDeleteErrorMessage],
  );

  const handlePostUpdateClose = () => {
    setIsPostUpdateOpen(false);
    if (params.postId) postsStore.getPost(params.postId);
  };

  const handlePostDeletionClose = () => {
    setIsPostDeletionOpen(false);
    if (params.postId) postsStore.getPost(params.postId);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsPostUpdateOpen(false);
    setIsPostDeletionOpen(false);
    postsStore.resetPostUpdate();
    postsStore.resetPostDeletion();
    if (postsStore.isPostDeleted) navigate(-1);
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
      <Modal isOpen={isModalOpen}
        type={(postsStore.isPostUpdated || postsStore.isPostDeleted) ? 'success' : 'error'}
        onClose={handleModalClose}
      >
        {postsStore.isPostUpdated && <p>Post was successfully updated!</p>}
        {postsStore.postUpdateErrorMessage && <p>Something went wrong!</p>}
        {postsStore.isPostDeleted && <p>Post was deleted!</p>}
        {postsStore.postDeleteErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
