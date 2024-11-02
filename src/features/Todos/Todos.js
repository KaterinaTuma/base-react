import classes from './Todos.module.scss';
import { Card } from 'entity';

/**
 * @typedef {import('./types').TodosProps} TodosProps
 */

/**
 * @function Todos
 * @param {TodosProps} props
 * @returns {JSX.Element}
 */

export const Todos = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) => (
        <Card.Todo key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};
