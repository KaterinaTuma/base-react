import './Card.css';

/**
 * @typedef {import('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  return (
    <li className={'card'}>
      <img src={props.url} alt={props.title} />
    </li>
  );
};
