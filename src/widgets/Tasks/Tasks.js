import classes from './Tasks.module.scss';
import { useEffect } from 'react';
import { useTodos } from 'shared/hooks';
import { TodosCounter, Todos } from 'features';
import { Preloader } from 'shared/ui';

/**
 * @function Tasks
 * @returns {JSX.Element}
 */

export const Tasks = () => {
  const todosState = useTodos();

  useEffect(() => {
    if (!todosState.todosCount) return;
    todosState.getTodos(todosState.todosCount);
  }, [todosState.todosCount]);

  return (
    <div className={classes.tasks}>
      <TodosCounter name={'Todos count'} />
      <Todos todos={todosState.todos}/>
      {todosState.isTodosLoading ? <Preloader /> : null}
    </div>
  );
};
