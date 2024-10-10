import classes from './Tasks.module.scss';
import { Counter, Todos } from 'features';

/**
 * @typedef {import('./types').TasksProps} TasksProps
 */

/**
 * @function Tasks
 * @param {TasksProps} props
 * @returns {JSX.Element}
 */

export const Tasks = (props) => {
  return (
    <div className={classes.tasks}>
      <Counter name={'Todo count'}
        count={props.count}
        setCount={props.setCount}
      />
      <Todos todos={props.todos}/>
    </div>
  );
};
