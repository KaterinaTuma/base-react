import { useTodos } from 'shared/stores';
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
  const todosStore = useTodos();

  return (
    <Counter name={props.name}
      minCount={5}
      count={todosStore.todoCount}
      maxCount={15}
      setCount={todosStore.setTodoCount}
      isDisabled={todosStore.isTodosLoading}
    />
  );
};
