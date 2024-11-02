import classes from './TodoPage.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from 'shared/stores';
import { randomRGBA } from 'shared/utils';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodos();

  if (!params.todoId) return <p>Invalid todo id</p>;

  useEffect(() => {
    if (!params.todoId) return;
    todosStore.getTodoById(params.todoId);
  }, []);

  const todo = todosStore.todo;

  if (!todo) return <p>Task not found</p>;

  const background = randomRGBA(1);

  return (
    <div className={classes.todoPage}
      style={{ background }}
    >
      <h2>{todo.title}</h2>
    </div>
  );
};
