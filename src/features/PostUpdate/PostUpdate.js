import classes from './PostUpdate.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { usePosts } from 'shared/stores';
import { Modal } from 'shared/ui';
import { Preloader } from 'shared/ui';
import { InputText } from 'shared/ui';
import { Textarea } from 'shared/ui';
import { Button } from 'shared/ui';
import { DEFAULT_USER_ID } from 'shared/config';

/**
 * @typedef {import('./types').PostUpdateProps} Props
 */

/**
 * @function PostUpdate
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const PostUpdate = (props) => {
  if (!props.isOpen) return null;

  const postsStore = usePosts();
  const [postTitle, setPostTitle] = useState(postsStore.post?.title ?? '');
  const [postBody, setPostBody] = useState(postsStore.post?.body ?? '');
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const handleTitleInputChange = (/** @type {React.ChangeEvent<HTMLInputElement>} */ event) =>
    setPostTitle(/** @type {HTMLInputElement} */ (event.target).value);

  const handleBodyInputChange = (/** @type {React.ChangeEvent<HTMLTextAreaElement>} */ event) =>
    setPostBody(/** @type {HTMLTextAreaElement} */ (event.target).value);

  const handleSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ event) => {
    event.preventDefault();
    if (!postsStore.post?.id) return;
    const post = {
      id: postsStore.post.id,
      userId: DEFAULT_USER_ID,
      title: postTitle,
      body: postBody,
      timestamp: Date.now(),
    };
    postsStore.updatePost(post);
  };

  const handleResultModalClose = () => {
    setIsFeedbackModalOpen(false);
    postsStore.resetPostUpdate();
    props.onClose();
  };

  useEffect(() => {
    if (postsStore.isPostUpdated || postsStore.postUpdateErrorMessage) {
      setIsFeedbackModalOpen(true);
    }
  }, [postsStore.isPostUpdated, postsStore.postUpdateErrorMessage]);

  return (
    <>
      {/* PostUpdate modal */}
      <Modal isOpen={props.isOpen}
        onClose={props.onClose}
      >
        {/* Title */}
        <h2 className={classes.title}>Update post</h2>
        {/* Form */}
        <form className={classes.form}
          onSubmit={handleSubmit}>
          <InputText placeholder={'Enter title'}
            value={postTitle}
            onChange={handleTitleInputChange}
          />
          <Textarea className={classes.input}
            placeholder={'Enter content'}
            value={postBody}
            onChange={handleBodyInputChange}
          />
          <div className={classes.actions}>
            <Button mode={'default'}
              type={'submit'}
              disabled={!postTitle || !postBody || postsStore.isPostUpdating}
            >
              {'Update'}
            </Button>
            <Button type={'button'}
              disabled={postsStore.isPostUpdating}
              onClick={props.onClose}
            >
              {'Cancel'}
            </Button>
          </div>
        </form>
        <Preloader isActive={postsStore.isPostUpdating}/>
      </Modal>
      {/* Feedback modal */}
      <Modal isOpen={isFeedbackModalOpen}
        type={postsStore.isPostUpdated ? 'success' : 'error'}
        onClose={handleResultModalClose}
      >
        {postsStore.isPostUpdated && <p>Post was successfully updated!</p>}
        {postsStore.postUpdateErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
