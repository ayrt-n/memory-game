import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

function Card({ color }) {
  const classes = `Card ${color}`;

  return (
    <button
      className={classes}
      type="button"
      aria-label={`${color} card`}
      id={color}
    />
  );
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Card;
