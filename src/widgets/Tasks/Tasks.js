import classes from './Tasks.module.scss';
import { useEffect } from 'react';
import { useTodos } from 'shared/stores';
import { TodoCounter } from 'features';
import { Todos } from 'features';
import { Preloader } from 'shared/ui';

/**
 * @function Tasks
 * @returns {JSX.Element}
 */

export const Tasks = () => {
  const todosStore = useTodos();

  useEffect(() => {
    if (!todosStore.todoCount) return;
    todosStore.getTodos(todosStore.todoCount);
  }, [todosStore.todoCount]);

  return (
    <div className={classes.tasks}>
      <TodoCounter name={'Todos count'} />
      <Todos todos={todosStore.todos}/>
      <Preloader isActive={todosStore.isTodosLoading} />
    </div>
  );
};
