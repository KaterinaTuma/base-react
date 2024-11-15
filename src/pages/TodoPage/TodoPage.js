import classes from './TodoPage.module.scss';
import { useParams } from 'react-router-dom';
import { useTodos } from 'shared/stores';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Todo } from 'features';
import { Modal } from 'shared/ui';
import { Button } from 'shared/ui';
import { Preloader } from 'shared/ui';
import { IconDelete } from 'shared/icons';
import { IconEdit } from 'shared/icons';
import { randomRGBA } from 'shared/utils';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodos();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isDeletorOpen, setIsDeletorOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  if (!params.todoId) return <p>Invalid todo id</p>;

  useEffect(() => {
    if (!params.todoId) return;
    todosStore.getTodo(params.todoId);
  }, [params.todoId]);

  useEffect(() => {
    if (todosStore.isTodoUpdated ||
      todosStore.todoUpdateErrorMessage ||
      todosStore.isTodoDeleted ||
      todosStore.todoDeleteErrorMessage
    ) {
      setIsModalOpen(true);
    }
  }, [todosStore.isTodoUpdated,
    todosStore.todoUpdateErrorMessage,
    todosStore.isTodoDeleted,
    todosStore.todoDeleteErrorMessage],
  );

  const handleEditorClose = () => {
    setIsEditorOpen(false);
    if (params.todoId) todosStore.getTodo(params.todoId);
  };

  const handleDeletorClose = () => {
    setIsDeletorOpen(false);
    if (params.todoId) todosStore.getTodo(params.todoId);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditorOpen(false);
    setIsDeletorOpen(false);
    todosStore.resetTodoUpdate();
    todosStore.resetTodoDeletion();
    if (todosStore.isTodoDeleted) navigate(-1);
  };

  if (!todosStore.todo && todosStore.isTodoLoading) {
    return <Preloader isActive={todosStore.isTodoLoading} />;
  }
  if (!todosStore.todo) {
    return <p>{todosStore.todoLoadErrorMessage}</p>;
  }

  const background = localStorage.getItem(params.todoId) || randomRGBA(1);

  return (
    <>
      <div className={classes.todoPage}
        style={{ background }}
      >
        <h2>{todosStore.todo.title}</h2>
        <div className={classes.buttons}>
          <Button mode={'default'}
            type={'button'}
            onClick={() => setIsEditorOpen(true)}
          >
            <IconEdit />
          </Button>
          <Button mode={'default'}
            type={'button'}
            onClick={() => setIsDeletorOpen(true)}
          >
            <IconDelete />
          </Button>
        </div>
      </div>
      {/* Modals */}
      {/* <Todo.Editor isOpen={isEditorOpen}
        onClose={handleEditorClose}
      /> */}
      {/* <Todo.Deleter isOpen={isDeletorOpen}
        onClose={handleDeletorClose}
      /> */}
      <Modal isOpen={isModalOpen}
        type={(todosStore.isTodoUpdated || todosStore.isTodoDeleted) ? 'success' : 'error'}
        onClose={handleModalClose}
      >
        {todosStore.isTodoUpdated && <p>Todo was successfully updated!</p>}
        {todosStore.todoUpdateErrorMessage && <p>Something went wrong!</p>}
        {todosStore.isTodoDeleted && <p>Todo was deleted!</p>}
        {todosStore.todoDeleteErrorMessage && <p>Something went wrong!</p>}
      </Modal>
    </>
  );
};
