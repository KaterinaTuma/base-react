import classes from './TodoPage.module.scss';
import { useParams } from 'react-router-dom';
import { useTodosStore } from 'shared/hooks';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodosStore();

  if (!params.todoId) return <p>Invalid todo id</p>;

  const todo = todosStore.getTodoById(todosStore.todos, params.todoId);

  if (!todo) return <p>Task not found</p>;

  return (
    <div className={classes.todoPage}>
      <h2>{todo.title}</h2>
    </div>
  );
};
