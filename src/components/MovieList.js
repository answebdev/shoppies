import React, { useState } from 'react';
import Spinner from './misc/Spinner';
import classes from '../styles/MovieList.module.css';

const MovieList = (props) => {
  // const NominateButtonComponent = props.nominateComponent;
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [isLoading] = useState(false);
  const [error] = useState(false);

  const { disableNominateButton } = props;

  return (
    <div className={classes.Container}>
      <div>
        {props.movies.map((movie, index) => (
          <div key={index}>
            <div className={classes.MovieDiv}>
              <div className={classes.MovieCard}>
                <div>
                  {movie.Title} • {movie.Year}
                </div>
                <div>
                  <button
                    className={classes.Button}
                    onClick={() => props.handleNominate(movie)}
                    disabled={disableNominateButton(movie.imdbID)}
                  >
                    Nominate
                  </button>
                </div>

                {/* <div>
                  {!movie && !isLoading ? <div>Movie not found</div> : null}
                </div> */}
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
