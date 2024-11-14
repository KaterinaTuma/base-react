import classes from './Deleter.module.scss';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
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

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!postsStore.post?.id) return;
    postsStore.deletePost(postsStore.post.id);
  };

  useEffect(() => {
    if (postsStore.isPostDeleted || postsStore.postDeleteErrorMessage) {
      setIsModalOpen(true);
    }
  }, [postsStore.isPostDeleted, postsStore.postDeleteErrorMessage]);

  return (
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
  );
};
