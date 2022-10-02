import React, { useEffect, useState } from 'react';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, [score]);

  return (
    <div className="App">
      <h1>Memory Game!</h1>
      <p>
        Instructions: Click a card and keep track of which colors you have already selected.
        Don&#39;t click the same color twice or game over. If you have clicked all colors once,
        the game will reset and keep going!
      </p>
      <Game
        incrementScore={() => setScore(score + 1)}
        resetScore={() => setScore(0)}
      />
      <Scoreboard score={score} highscore={highscore} />
    </div>
  );
}

export default App;
