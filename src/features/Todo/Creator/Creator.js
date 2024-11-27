import classes from './Creator.module.scss';
import { useTodos } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'shared/ui';
import { InputText } from 'shared/ui';
import { Checkbox } from 'shared/ui';
import { Button } from 'shared/ui';
import { DEFAULT_USER_ID } from 'shared/config';
import { randomInt } from 'shared/utils';

/**
 * @typedef {import('./types').CreatorProps} Props
 * @typedef {import('./types').ChangeInputEvent} ChangeInputEvent
 * @typedef {import('./types').ChangeCheckboxEvent} ChangeCheckboxEvent
 * @typedef {import('./types').SubmitFormEvent} SubmitFormEvent
 */

/**
 * @function Creator
 * @param {Props} props
 * @returns {JSX.Element | null}
 */

export const Creator = (props) => {
  const todosStore = useTodos();
  const [title, setTitle] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  if (!props.isOpen) return null;

  /** @type {(event: ChangeInputEvent) => void} */
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  /** @type {(event: SubmitFormEvent) => void} */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: randomInt(1000, 9999),
      userId: DEFAULT_USER_ID,
      title,
      completed: isCompleted,
    };
    todosStore.createTodo(todo);
  };

  return (
    <Modal isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className={classes.modalBody}>
        {/* Title */}
        <h2 className={classes.title}>Add todo</h2>
        {/* Form */}
        <form className={classes.form}
          onSubmit={handleFormSubmit}
        >
          <InputText placeholder={'Title'}
            value={title}
            onChange={handleTitleChange}
          />
          <Checkbox checked={isCompleted}
            label='Completed'
            onChange={handleCheckboxChange}
          />
          <div className={classes.buttons}>
            <Button type={'submit'}
              disabled={!title || todosStore.isTodoCreating}
            >
              Create todo
            </Button>
            <Button type={'button'}
              disabled={todosStore.isTodoCreating}
              onClick={props.onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
