import classes from './UserPage.module.scss';
import { useLocation, useParams } from 'react-router-dom';
import { useUsersStore } from 'shared/hooks';

/**
 * @function UserPage
 * @returns {JSX.Element}
 */

export const UserPage = () => {
  const params = useParams();
  const usersStore = useUsersStore();
  const location = useLocation();

  if (!params.userId) return <p>Invalid user id</p>;

  const user = usersStore.getUserById(usersStore.users, params.userId);

  if (!user) return <p>Task not found</p>;

  return (
    <div className={classes.user}
      style={{ background: location.state.backgroundColor }}
    >
      <h2>{user.username}</h2>
      <ul className={classes.list}>
        <li>Login: {user.name}</li>
        <li>Tel.: {user.phone}</li>
        <li>Website: {user.website}</li>
        <li>Location: {user.address.city}</li>
      </ul>
    </div>
  );
};
