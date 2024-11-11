import classes from './Deleter.module.scss';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'shared/ui';
import { Button } from 'shared/ui';
import { Preloader } from 'shared/ui';

/**
 * @typedef {import('./types').DeleterProps} Props
 * @typedef {import('./types').SubmitFormEvent} SubmitFormEvent
 */

/**
 * @function Deleter
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const Deleter = (props) => {
  if (!props.isOpen) return null;

  const postsStore = usePosts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!postsStore.post?.id) return;
    postsStore.deletePost(postsStore.post.id);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    postsStore.resetPostDeletion();
    props.onClose();
    if (postsStore.isPostDeleted) navigate(-1);
  };

  useEffect(() => {
    if (postsStore.isPostDeleted || postsStore.postDeleteErrorMessage) {
      setIsModalOpen(true);
    }
  }, [postsStore.isPostDeleted, postsStore.postDeleteErrorMessage]);

  return (
    <>
      {/* PostDelete modal */}
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div className={classes.modalBody}>
          {/* Title */}
          <h2 className={classes.title}>Delete post</h2>
          {/* Form */}
          <form className={classes.form}
            onSubmit={handleFormSubmit}>
            <p>Are you sure? This action cannot be undone!</p>
            <div className={classes.buttons}>
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
        </div>
      </Modal>
      {/* Feedback modal */}
      <Modal isOpen={isModalOpen}
        type={postsStore.isPostDeleted ? 'success' : 'error'}
        onClose={handleModalClose}
      >
        {postsStore.isPostDeleted && <p>Post was deleted!</p>}
        {postsStore.postDeleteErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
