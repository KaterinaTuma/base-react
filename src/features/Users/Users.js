import classes from './Users.module.scss';
import { Card } from 'entity';

/**
 * @typedef {import('./types').UsersProps} UsersProps
 */

/**
 * @function Users
 * @param {UsersProps} props
 * @returns {JSX.Element}
 */

export const Users = (props) => {
  return (
    <ul className={classes.users}>
      {props.users.map((user) => (
        <Card key={user.id}
          id={user.id}
          name={user.name}
          user={user.username}
        />
      ))}
    </ul>
  );
};
