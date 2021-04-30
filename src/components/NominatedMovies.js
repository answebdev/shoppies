import React from 'react';
import RemoveNominatedMovie from './RemoveNominatedMovie';
import classes from '../styles/NominatedMovies.module.css';
import imdb from '../../src/img/imdb.png';

const NominatedMovies = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div className={classes.NominatedMovieCard} key={index}>
          <div className={classes.MovieDiv}>
            <div className={classes.MovieCard}>
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
              <p>{movie.Rated}</p>
              <p>{movie.Genre}</p>
              <img style={{ height: '100px' }} src={movie.Poster} alt='' />
              <a
                href={`https://www.imdb.com/title/${movie.imdbID.replace(
                  /['"]+/g,
                  ''
                )}`}
                target='_blank'
                rel='noreferrer noopener'
              >
                <img style={{ width: '20%' }} src={imdb} alt='' />
              </a>
            </div>
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
