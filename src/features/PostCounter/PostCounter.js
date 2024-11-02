import { usePosts } from 'shared/stores';
import { Counter } from 'entity';

/**
 * @typedef {import('./types').PostCounterProps} Props
 */

/**
 * @function PostCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PostCounter = (props) => {
  const postsStore = usePosts();

  return (
    <Counter name={props.name}
      minCount={5}
      count={postsStore.postCount}
      maxCount={15}
      setCount={postsStore.setPostCount}
      isDisabled={postsStore.isPostsLoading}
    />
  );
};
