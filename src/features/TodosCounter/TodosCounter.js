import classes from './TodosCounter.module.scss';
import { useTodos } from 'shared/hooks';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function TodosCounter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const TodosCounter = (props) => {
  const todosStore = useTodos();

  const minCount = 0;
  const maxCount = 20;
  const isMinCount = props.count <= minCount;
  const isMaxCount = props.count >= maxCount;

  const handleDownClick = () => {
    if (isMinCount) return;
    props.setCount(props.count - 1);
    todosStore.getTodos(props.count - 1);
  };

  const handleUpClick = () => {
    if (isMaxCount) return;
    props.setCount(props.count + 1);
    todosStore.getTodos(props.count + 1);
  };

  const handleClearClick = () => {
    if (isMaxCount) return;
    props.setCount(0);
    todosStore.resetTodos();
  };

  return (
    <div className={classes.counter}>
      <p className={classes.text}>
        {props.name}: {props.count}
      </p>
      <button className={classes.button}
        disabled={isMinCount}
        onClick={handleDownClick}
      >
        Down
      </button>
      <button className={classes.button}
        disabled={isMaxCount}
        onClick={handleUpClick}
      >
        Up
      </button>
      <button className={classes.button}
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  );
};
