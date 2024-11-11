import classes from './PostCreation.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { usePosts } from 'shared/stores';
import { Modal } from 'shared/ui';
import { InputText } from 'shared/ui';
import { Textarea } from 'shared/ui';
import { Button } from 'shared/ui';
import { DEFAULT_USER_ID } from 'shared/config';

/**
 * @typedef {import('./types').PostCreationProps} Props
 */

/**
 * @function PostCreation
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const PostCreation = (props) => {
  if (!props.isOpen) return null;

  const postsStore = usePosts();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handlePostTitleChange = (/** @type {React.ChangeEvent<HTMLInputElement>} */ event) =>
    setPostTitle(/** @type {HTMLInputElement} */ (event.target).value);

  const handleBodyInputChange = (/** @type {React.ChangeEvent<HTMLTextAreaElement>} */ event) =>
    setPostBody(/** @type {HTMLTextAreaElement} */ (event.target).value);

  const handleCreateSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ event) => {
    event.preventDefault();
    const post = {
      userId: DEFAULT_USER_ID,
      title: postTitle,
      body: postBody,
      timestamp: Date.now(),
    };
    postsStore.createPost(post);
  };

  const handleFeedbackModalClose = () => {
    setIsFeedbackModalOpen(false);
    postsStore.resetPostCreation();
    props.onClose();
  };

  useEffect(() => {
    if (postsStore.isPostCreated || postsStore.postCreateErrorMessage) {
      setIsFeedbackModalOpen(true);
    }
  }, [postsStore.isPostCreated, postsStore.postCreateErrorMessage]);

  return (
    <>
      {/* PostCreation modal */}
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        {/* Title */}
        <h2 className={classes.title}>Add post</h2>
        {/* Form */}
        <form className={classes.form}
          onSubmit={handleCreateSubmit}
        >
          <InputText placeholder={'Title'}
            value={postTitle}
            onChange={handlePostTitleChange}
          />
          <Textarea placeholder={'Post'}
            value={postBody}
            onChange={handleBodyInputChange}
          />
          <div className={classes.actions}>
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
      </Modal>
      {/* Feedback modal */}
      <Modal isOpen={isFeedbackModalOpen}
        type={postsStore.isPostCreated ? 'success' : 'error'}
        onClose={handleFeedbackModalClose}
      >
        {postsStore.isPostCreated && <p>Post was successfully created!</p>}
        {postsStore.postCreateErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
