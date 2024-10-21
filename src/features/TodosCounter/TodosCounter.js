import { useTodos } from 'shared/hooks';
import { Counter } from 'entity';

/**
 * @typedef {import('./types').TodosCounterProps} Props
 */

/**
 * @function TodosCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const TodosCounter = (props) => {
  const todosState = useTodos();

  return (
    <Counter name={props.name}
      minCount={5}
      count={todosState.todosCount}
      maxCount={15}
      setCount={todosState.setTodosCount}
    />
  );
};
