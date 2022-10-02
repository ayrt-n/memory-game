import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import shuffle from '../helpers/shuffle';
import '../styles/Game.css';

function Game({ incrementScore, resetScore }) {
  const [cards, setCards] = useState([
    'red',
    'blue',
    'green',
    'purple',
    'yellow',
    'orange',
    'teal',
    'grey',
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    setCards(shuffle(cards));
  }, []);

  useEffect(() => {
    const advanceGameOnClick = (e) => {
      const card = e.target.closest('button.Card');
      if (!card) { return; }

      if (clickedCards.includes(card.id)) {
        setClickedCards([]);
        setCards(shuffle(cards));
        resetScore();
      } else {
        setClickedCards(clickedCards.concat(card.id));
        setCards(shuffle(cards));
        incrementScore();
      }
    };

    document.getElementById('game-container').addEventListener('click', advanceGameOnClick);

    return function cleanUp() {
      document.getElementById('game-container').removeEventListener('click', advanceGameOnClick);
    };
  });

  return (
    <div className="Game" id="game-container">
      {cards.map((card) => (<Card color={card} key={card} />))}
    </div>
  );
}

Game.propTypes = {
  incrementScore: PropTypes.func.isRequired,
  resetScore: PropTypes.func.isRequired,
};

export default Game;
