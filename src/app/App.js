import './App.css';
import { useState, useEffect } from 'react';
import { Counter, Cards } from 'features';
import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const [count, setCount] = useState(9);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const endPoint = `photos?_start=0&_limit=${count}`;
        const response = await fetch(`${API_BASE_URL}/${endPoint}`);
        if (!response.ok) throw new Error();
        const cardsData = await response.json();
        setCards(cardsData);
      } catch (/** @type {*} */ error) {
        console.error(error);
      }
    })();
  }, [count]);

  return (
    <div className={'app'}>
      <h1>{props.title}</h1>
      <Counter count={count} setCount={setCount} />
      <Cards cards={cards} />
    </div>
  );
};
