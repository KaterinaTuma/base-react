import classes from './Tasks.module.scss';
import { TodosCounter, Todos } from 'features';
import { useTodos } from 'shared/hooks';

/**
 * @typedef {import('./types').TasksProps} TasksProps
 */

/**
 * @function Tasks
 * @param {TasksProps} props
 * @returns {JSX.Element}
 */

export const Tasks = (props) => {
  const todosStore = useTodos();

  return (
    <div className={classes.tasks}>
      <TodosCounter name={'Todo count'}
        count={props.count}
        setCount={props.setCount}
      />
      <Todos todos={todosStore.todos}/>
    </div>
  );
};
