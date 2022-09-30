import React, { useEffect, useState } from 'react';
import Card from './Card';
import shuffle from '../helpers/shuffle';
import '../styles/Game.css';

function Game(props) {
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
        // Game over!!! Reset score and game
        setClickedCards([]);
        setCards(shuffle(cards));
        console.log('Bad');
      } else {
        setClickedCards(clickedCards.concat(card.id));
        setCards(shuffle(cards));
        console.log('Good');
        // Update score
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

export default Game;
