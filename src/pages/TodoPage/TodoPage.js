import classes from './TodoPage.module.scss';
import { useParams, useLocation } from 'react-router-dom';
import { useTodosStore } from 'shared/hooks';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodosStore();
  const location = useLocation();

  if (!params.todoId) return <p>Invalid todo id</p>;

  const todo = todosStore.getTodoById(todosStore.todos, params.todoId);

  if (!todo) return <p>Task not found</p>;

  return (
    <div className={classes.todoPage}
      style={{ background: location.state.backgroundColor }}
    >
      <h2>{todo.title}</h2>
    </div>
  );
};
