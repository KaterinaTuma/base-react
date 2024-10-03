import './Cards.css';
import { Card } from '../Card';

/**
 * @typedef {import('./types').CardsProps} CardsProps
 */

/**
 * @function Cards
 * @param {CardsProps} props
 * @returns {JSX.Element}
 */

export const Cards = (props) => {
  return (
    <ul className={'cards'}>
      {props.cards.map((card) =>
        <Card title={card.title}
          url={card.thumbnailUrl}
          key={card.id}
        />)
      }
    </ul>
  );
};
