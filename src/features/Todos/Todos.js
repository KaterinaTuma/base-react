import './Todos.css';
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
    <ul className={'todos'}>
      {props.todos.map((todo) =>
        <Card key={todo.id}
          id={todo.id}
          name={todo.title}
        />)
      }
    </ul>
  );
};
