import React, { useState } from 'react';
import Spinner from './misc/Spinner';
import classes from '../styles/MovieList.module.css';

const MovieList = (props) => {
  const [error] = useState(false);

  const { disableNominateButton } = props;

  return (
    <div className={classes.Container}>
      <div>
        {props.movies.map((movie, index) => (
          <div key={index}>
            <div className={classes.MovieDiv}>
              <div className={classes.MovieCard}>
                <div data-testid='movie-title-and-year'>
                  {movie.Title} • {movie.Year}
                </div>
                <div>
                  <button
                    data-testid='nominate-btn'
                    className={classes.Button}
                    onClick={() => props.handleNominate(movie)}
                    disabled={disableNominateButton(movie.imdbID)}
                  >
                    Nominate
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {!props.isLoading ? <div className='text-center'></div> : <Spinner />}

        {!props.isLoading && error ? (
          <div>
            <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieList;
