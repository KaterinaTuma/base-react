import classes from './Card.module.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { randomRGBA } from 'shared/utils';

/**
 * @typedef {import('./types').PhotoProps} PhotoProps
 * @typedef {import('./types').TodoProps} TodoProps
 * @typedef {import('./types').PostProps} PostProps
 * @typedef {import('./types').Card} Card
 */

/**
 * @function Photo
 * @param {PhotoProps} props
 * @returns
 */

const Photo = (props) => {
  const endPoint = `/photo/${props.photo.id}`;

  return (
    <Link to={endPoint}>
      <li className={classes.card}>
        <h2 className={classes.title}>
          {props.photo.title}
        </h2>
        <img className={classes.image}
          src={props.photo.url}
          alt={props.photo.title}
        />
      </li>
    </Link>
  );
};

/**
 * @function Todo
 * @param {TodoProps} props
 * @returns
 */

const Todo = (props) => {
  const endPoint = `/todo/${props.todo.id}`;
  const background = randomRGBA(1);

  return (
    <Link to={endPoint}>
      <li className={classes.card}
        style={{ background }}
      >
        <h2 className={classes.title}>
          {props.todo.title}
        </h2>
      </li>
    </Link>
  );
};

/**
 * @function Post
 * @param {PostProps} props
 * @returns
 */

const Post = (props) => {
  const endPoint = `/post/${props.post.id}`;
  const background = randomRGBA(0.5);

  useEffect(() => {
    localStorage.setItem(String(props.post.id), background);
  }, []);

  return (
    <Link to={endPoint}>
      <li className={classes.card}
        style={{ background }}
      >
        <div className={classes.post}>
          <h2 className={classes.label}>
            {props.post.title}
          </h2>
          <p className={classes.text}>
            {props.post.body}
          </p>
        </div>
      </li>
    </Link>
  );
};

/** @type {Card} */
export const Card = {
  Photo,
  Todo,
  Post,
};
