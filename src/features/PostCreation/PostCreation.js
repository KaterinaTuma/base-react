import classes from './PostCreation.module.scss';
import { useState } from 'react';
import { usePosts } from 'shared/stores';
import { Modal } from 'entity';
import { InputText } from 'shared/ui';
import { Button } from 'shared/ui';
import { randomInt } from 'shared/utils';

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
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleInputChange = (/** @type {React.ChangeEvent<HTMLInputElement>} */ event) => {
    const title = /** @type {HTMLInputElement} */ (event.target).value;
    setTitle(title);
  };

  const handleBodyInputChange = (/** @type {React.ChangeEvent<HTMLInputElement>} */ event) => {
    const body = /** @type {HTMLInputElement} */ (event.target).value;
    setBody(body);
  };

  const handleSubmit = (/** @type {React.FormEvent<HTMLFormElement>} */ event) => {
    event.preventDefault();
    const post = {
      id: randomInt(22, 100),
      userId: randomInt(100, 200),
      title,
      body,
    };
    postsStore.createPost(post);
  };

  return (
    <Modal isOpen={props.isOpen}
      onClose={props.onClose}
    >
      {/* Title */}
      <h2 className={classes.title}>Add post</h2>
      {/* Form */}
      <form className={classes.form}
        onSubmit={handleSubmit}
      >
        <InputText placeholder={'Title'}
          value={title}
          onChange={handleTitleInputChange}
        />
        <InputText placeholder={'Post'}
          value={body}
          onChange={handleBodyInputChange}
        />
        <div className={classes.actions}>
          <Button type={'submit'}>
            {'Add Post'}
          </Button>
          <Button type={'button'}
            onClick={props.onClose}
          >
            {'Cancel'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
