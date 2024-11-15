import { useTodos } from 'shared/stores';
import { Counter as UiCounter } from 'entity';

/**
 * @typedef {import('./types').TodoCounterProps} Props
 */

/**
 * @function Counter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const todosStore = useTodos();

  return (
    <UiCounter name={props.name}
      minCount={5}
      count={todosStore.todoCount}
      maxCount={15}
      setCount={todosStore.setTodoCount}
      isDisabled={todosStore.isTodosLoading}
    />
  );
};
