import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Scoreboard.css';

function Scoreboard({ score, highscore }) {
  return (
    <div className="Scoreboard">
      <div>
        Score:
        {score}
      </div>
      <div>
        High Score:
        {highscore}
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  highscore: PropTypes.number.isRequired,
};

export default Scoreboard;
