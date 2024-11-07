import classes from './Editor.module.scss';
import { DEFAULT_USER_ID } from 'shared/config';
import { usePosts } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'shared/ui';
import { InputText } from 'shared/ui';
import { Textarea } from 'shared/ui';
import { Button } from 'shared/ui';
import { Preloader } from 'shared/ui';

/**
 * @typedef {import('./types').EditorProps} Props
 * @typedef {import('./types').ChangeInputEvent} ChangeInputEvent
 * @typedef {import('./types').ChangeTextareaEvent} ChangeTextareaEvent
 * @typedef {import('./types').SubmitFormEvent} SubmitFormEvent
 */

/**
 * @function Editor
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const Editor = (props) => {
  if (!props.isOpen) return null;

  const postsStore = usePosts();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    if (!postsStore.post) return;
    setPostTitle(postsStore.post.title);
    setPostBody(postsStore.post.body);
  }, [postsStore.post]);

  /** @type {(event: ChangeInputEvent) => void} */
  const handleTitleChange = (event) => {
    setPostTitle(event.target.value);
  };

  /** @type {(event: ChangeTextareaEvent) => void} */
  const handleBodyChange = (event) => {
    setPostBody(event.target.value);
  };

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
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

  const handleModalClose = () => {
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
        <div className={classes.modalBody}>
          {/* Title */}
          <h2 className={classes.title}>Update post</h2>
          {/* Form */}
          <form className={classes.form}
            onSubmit={handleFormSubmit}>
            <InputText placeholder={'Enter title'}
              value={postTitle}
              onChange={handleTitleChange}
            />
            <Textarea className={classes.input}
              placeholder={'Enter content'}
              value={postBody}
              onChange={handleBodyChange}
            />
            <div className={classes.buttons}>
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
        </div>
      </Modal>
      {/* Feedback modal */}
      <Modal isOpen={isFeedbackModalOpen}
        type={postsStore.isPostUpdated ? 'success' : 'error'}
        onClose={handleModalClose}
      >
        {postsStore.isPostUpdated && <p>Post was successfully updated!</p>}
        {postsStore.postUpdateErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
