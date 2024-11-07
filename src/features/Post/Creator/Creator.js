import classes from './Creator.module.scss';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'shared/ui';
import { InputText } from 'shared/ui';
import { Textarea } from 'shared/ui';
import { Button } from 'shared/ui';
import { DEFAULT_USER_ID } from 'shared/config';

/**
 * @typedef {import('./types').CreatorProps} Props
 * @typedef {import('./types').ChangeInputEvent} ChangeInputEvent
 * @typedef {import('./types').ChangeTextareaEvent} ChangeTextareaEvent
 * @typedef {import('./types').SubmitFormEvent} SubmitFormEvent
 */

/**
 * @function Creator
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const Creator = (props) => {
  if (!props.isOpen) return null;

  const postsStore = usePosts();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** @type {(event: ChangeInputEvent) => void} */
  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  /** @type {(event: ChangeTextareaEvent) => void} */
  const handleBodyInputChange = (event) => {
    setPostBody(event.target.value);
  };

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const post = {
      userId: DEFAULT_USER_ID,
      title: postTitle,
      body: postBody,
      timestamp: Date.now(),
    };
    postsStore.createPost(post);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    postsStore.resetPostCreation();
    props.onClose();
  };

  useEffect(() => {
    if (postsStore.isPostCreated || postsStore.postCreateErrorMessage) {
      setIsModalOpen(true);
    }
  }, [postsStore.isPostCreated, postsStore.postCreateErrorMessage]);

  return (
    <>
      {/* PostCreation modal */}
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        <div className={classes.modalBody}>
          {/* Title */}
          <h2 className={classes.title}>Add post</h2>
          {/* Form */}
          <form className={classes.form}
            onSubmit={handleFormSubmit}
          >
            <InputText placeholder={'Title'}
              value={postTitle}
              onChange={handlePostTitleChange}
            />
            <Textarea placeholder={'Post'}
              value={postBody}
              onChange={handleBodyInputChange}
            />
            <div className={classes.buttons}>
              <Button type={'submit'}
                disabled={!postTitle || !postBody || postsStore.isPostCreating}
              >
                Create post
              </Button>
              <Button type={'button'}
                disabled={postsStore.isPostCreating}
                onClick={props.onClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      {/* Feedback modal */}
      <Modal isOpen={isModalOpen}
        type={postsStore.isPostCreated ? 'success' : 'error'}
        onClose={handleModalClose}
      >
        {postsStore.isPostCreated && <p>Post was successfully created!</p>}
        {postsStore.postCreateErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
