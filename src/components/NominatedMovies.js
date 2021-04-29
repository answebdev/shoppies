import React from 'react';
import classes from '../styles/NominatedMovies.module.css';

const NominatedMovies = () => {
  return (
    <div>
      <h3>Nominated Movies</h3>
      <div className={classes.NominatedMovieCard}>Nominated Movie</div>
    </div>
  );
};

export default NominatedMovies;
