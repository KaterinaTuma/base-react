import { useUsersStore } from 'shared/hooks';
import { Counter } from 'entity';

/**
 * @typedef {import('./types').UserCounterProps} Props
 */

/**
 * @function UserCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const UserCounter = (props) => {
  const usersStore = useUsersStore();

  return (
    <Counter name={props.name}
      minCount={5}
      count={usersStore.userCount}
      maxCount={10}
      setCount={usersStore.setUserCount}
      isDisabled={usersStore.isUsersLoading}
    />
  );
};
