import { usePosts } from 'shared/stores';
import { Counter as UiCounter } from 'entity';

/**
 * @typedef {import('./types').CounterProps} Props
 */

/**
 * @function Counter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const postsStore = usePosts();

  return (
    <UiCounter name={props.name}
      minCount={5}
      count={postsStore.postCount}
      maxCount={15}
      setCount={postsStore.setPostCount}
      isDisabled={postsStore.isPostsLoading}
    />
  );
};
