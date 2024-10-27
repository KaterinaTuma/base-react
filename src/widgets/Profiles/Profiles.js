import classes from './Profiles.module.scss';
import { useEffect } from 'react';
import { useUsersStore } from 'shared/hooks';
import { UserCounter, Users } from 'features';
import { Preloader } from 'shared/ui';

/**
 * @function Profiles
 * @returns {JSX.Element}
 */

export const Profiles = () => {
  const usersStore = useUsersStore();

  useEffect(() => {
    if (!usersStore.userCount) return;
    usersStore.getUsers(usersStore.userCount);
  }, [usersStore.userCount]);

  return (
    <div className={classes.profiles}>
      <UserCounter name={'User count'} />
      <Users users={usersStore.users} />
      <Preloader isActive={usersStore.isUsersLoading} />
    </div>
  );
};
