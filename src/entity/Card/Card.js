import classes from './Card.module.scss';
import { Link } from 'react-router-dom';
import { randomRGBA } from 'shared/utils';

/**
 * @typedef {import('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  const page = (props.user && 'user') ||
    (props.image && 'photo') ||
    (props.name && 'todo');
  const endPoint = `/${page}/${props.id}`;

  const backgroundColor = randomRGBA(1);

  return (
    <>
      <Link to={endPoint}
        state={{ backgroundColor }}
      >
        <li className={classes.card}
          style={{ background: backgroundColor }}
        >
          {/* name */}
          {props.name && (
            <h2 className={classes.name}>
              {props.name}
            </h2>
          )}
          {/* image */}
          {props.image && (
            <img className={classes.image}
              src={props.image}
              alt={props.name}
            />
          )}
          {/* text */}
          {props.text && (
            <p className={classes.text}>
              {props.text}
            </p>
          )}
          {/* user */}
          {props.user && (
            <p className={classes.user}>
              {props.user}
            </p>
          )}
        </li>
      </Link>
    </>
  );
};
