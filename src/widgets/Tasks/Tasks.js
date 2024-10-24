import classes from './Tasks.module.scss';
import { useEffect } from 'react';
import { useTodosStore } from 'shared/hooks';
import { TodoCounter, Todos } from 'features';
import { Preloader } from 'shared/ui';

/**
 * @function Tasks
 * @returns {JSX.Element}
 */

export const Tasks = () => {
  const todosStore = useTodosStore();

  useEffect(() => {
    if (!todosStore.todoCount) return;
    todosStore.getTodos(todosStore.todoCount);
  }, [todosStore.todoCount]);

  return (
    <div className={classes.tasks}>
      <TodoCounter name={'Todos count'} />
      <Todos todos={todosStore.todos}/>
      {todosStore.isTodosLoading ? <Preloader /> : null}
    </div>
  );
};
