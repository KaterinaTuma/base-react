import classes from './Tasks.module.scss';
import { useTodos } from 'shared/stores';
import { useState } from 'react';
import { useEffect } from 'react';
import { Todo } from 'features';
import { Todos } from 'features';
import { Button } from 'shared/ui';
import { Modal } from 'shared/ui';
import { Preloader } from 'shared/ui';

/**
 * @function Tasks
 * @returns {JSX.Element}
 */

export const Tasks = () => {
  const todosStore = useTodos();
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!todosStore.todoCount) return;
    todosStore.getTodos(todosStore.todoCount);
  }, [todosStore.todoCount]);

  useEffect(() => {
    if (todosStore.isTodoCreated || todosStore.todoCreateErrorMessage) {
      setIsModalOpen(true);
    }
  }, [todosStore.isTodoCreated, todosStore.todoCreateErrorMessage]);

  const handleCreatorClose = () => {
    setIsCreatorOpen(false);
    todosStore.getTodos(todosStore.todoCount);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    todosStore.resetTodoCreation();
  };

  return (
    <div className={classes.tasks}>
      <Todo.Counter name={'Todos count'} />
      <Button type={'button'}
        onClick={() => setIsCreatorOpen(true)}
      >
          Create todo
      </Button>
      <Todos todos={todosStore.todos}/>
      <Preloader isActive={todosStore.isTodosLoading} />
      <Todo.Creator isOpen={isCreatorOpen}
        onClose={handleCreatorClose}
      />
      <Modal isOpen={isModalOpen}
        type={todosStore.isTodoCreated ? 'success' : 'error'}
        onClose={handleModalClose}
      >
        {todosStore.isTodoCreated && <p>Todo was successfully created!</p>}
        {todosStore.todoCreateErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </div>
  );
};
