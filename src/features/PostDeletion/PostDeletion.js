import classes from './PostDeletion.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from 'shared/stores';
import { Preloader } from 'shared/ui';
import { Modal } from 'shared/ui';
import { Button } from 'shared/ui';

/**
 * @typedef {import('./types').PostDeletionProps} Props
 */

/**
 * @function PostDeletion
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const PostDeletion = (props) => {
  if (!props.isOpen) return null;

  const navigate = useNavigate();
  const postsStore = usePosts();
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleDeleteSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ event) => {
    event.preventDefault();
    if (!postsStore.post?.id) return;
    postsStore.deletePost(postsStore.post.id);
  };

  const handleResultModalClose = () => {
    setIsFeedbackModalOpen(false);
    postsStore.resetPostDeletion();
    props.onClose();
    if (postsStore.isPostDeleted) navigate(-1);
  };

  useEffect(() => {
    if (postsStore.isPostDeleted || postsStore.postDeleteErrorMessage) {
      setIsFeedbackModalOpen(true);
    }
  }, [postsStore.isPostDeleted, postsStore.postDeleteErrorMessage]);

  return (
    <>
      {/* PostDelete modal */}
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        {/* Title */}
        <h2 className={classes.title}>Delete post</h2>
        {/* Form */}
        <form className={classes.form}
          onSubmit={handleDeleteSubmit}>
          <p>Are you sure? This action cannot be undone!</p>
          <div className={classes.actions}>
            <Button mode={'danger'}
              type={'submit'}
              disabled={postsStore.isPostDeleting}
            >
              Yes
            </Button>
            <Button type={'button'}
              disabled={postsStore.isPostDeleting}
              onClick={props.onClose}
            >
              No
            </Button>
          </div>
        </form>
        <Preloader isActive={postsStore.isPostDeleting} />
      </Modal>
      {/* Feedback modal */}
      <Modal isOpen={isFeedbackModalOpen}
        type={postsStore.isPostDeleted ? 'success' : 'error'}
        onClose={handleResultModalClose}
      >
        {postsStore.isPostDeleted && <p>Post was deleted!</p>}
        {postsStore.postDeleteErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
