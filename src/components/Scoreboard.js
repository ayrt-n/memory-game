import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Scoreboard.css';

function Scoreboard({ score, highscore }) {
  return (
    <table className="Scoreboard">
      <tbody>
        <tr>
          <th className="Scoreboard-descriptor">Score</th>
          <td className="Scoreboard-score">{score}</td>
        </tr>
        <tr>
          <th className="Scoreboard-descriptor">High Score</th>
          <td className="Scoreboard-score">{highscore}</td>
        </tr>
      </tbody>
    </table>
  );
}

Scoreboard.propTypes = {
  score: PropTypes.number.isRequired,
  highscore: PropTypes.number.isRequired,
};

export default Scoreboard;
