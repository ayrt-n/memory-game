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
      <Game
        incrementScore={() => setScore(score + 1)}
        resetScore={() => setScore(0)}
      />
      <Scoreboard score={score} highscore={highscore} />
    </div>
  );
}

export default App;
