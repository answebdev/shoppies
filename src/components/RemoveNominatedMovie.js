import React from 'react';
import classes from '../styles/RemoveButton.module.css';

const RemoveNominatedMovie = () => {
  return (
    <>
      <button data-testid='remove-btn' className={classes.RemoveBtn}>
        Remove
      </button>
    </>
  );
};

export default RemoveNominatedMovie;
