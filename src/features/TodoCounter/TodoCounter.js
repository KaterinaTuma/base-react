import { useTodosStore } from 'shared/hooks';
import { Counter } from 'entity';

/**
 * @typedef {import('./types').TodoCounterProps} Props
 */

/**
 * @function TodoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const TodoCounter = (props) => {
  const todosStore = useTodosStore();

  return (
    <Counter name={props.name}
      minCount={5}
      count={todosStore.todoCount}
      maxCount={15}
      setCount={todosStore.setTodoCount}
    />
  );
};
