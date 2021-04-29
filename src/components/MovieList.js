import React from 'react';
import classes from '../styles/MovieList.module.css';

const MovieList = (props) => {
  return (
    <div className={classes.MovieDiv}>
      <div className={classes.MovieCard}>
        {props.movies.map((movie, index) => (
          <div key={index}>
            <img className={classes.MovieImage} src={movie.Poster} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
