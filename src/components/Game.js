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
    'black',
    'blueviolet',
    'brown',
    'yellowgreen',
  ]);

  const [clickedCards, setClickedCards] = useState([]);

  // Initial shuffle and display of cards on mount
  useEffect(() => {
    setCards(shuffle(cards));
  }, []);

  useEffect(() => {
    const advanceGameOnClick = (e) => {
      const card = e.target.closest('button.Card');
      if (!card) { return; }

      if (clickedCards.includes(card.id)) {
        // Reset clicked cards array, shuffle cards, and reset the score
        setClickedCards([]);
        setCards(shuffle(cards));
        resetScore();
      } else {
        // Add clicked card to clicked cards array, shuffle cards, and increment score
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

  // If all cards have been clicked, reset the clicked cards tracking array
  useEffect(() => {
    if (clickedCards.length === cards.length) { setClickedCards([]); }
  }, [clickedCards]);

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
