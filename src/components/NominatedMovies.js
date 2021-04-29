import React from 'react';
import RemoveNominatedMovie from './RemoveNominatedMovie';
import classes from '../styles/NominatedMovies.module.css';

const NominatedMovies = (props) => {
  return (
    <div>
      {/* <h3>Nominated Movies</h3>
      <div className={classes.NominatedMovieCard}>Nominated Movie</div> */}
      {props.movies.map((movie, index) => (
        <div className={classes.NominatedMovieCard} key={index}>
          <div className={classes.MovieDiv}>
            <div className={classes.MovieCard}>
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
              <img style={{ height: '100px' }} src={movie.Poster} alt='' />
            </div>
            {/* <button>Remove</button> */}
            <div onClick={() => props.handleRemove(movie)}>
              <RemoveNominatedMovie />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NominatedMovies;
