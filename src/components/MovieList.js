import React, { useState } from 'react';
import Spinner from './misc/Spinner';
import classes from '../styles/MovieList.module.css';

const MovieList = (props) => {
  const NominateButtonComponent = props.nominateComponent;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { disableNominateButton } = props;

  return (
    <div className={classes.MovieDiv}>
      <div>
        <p>
          <strong>Movie results for:</strong> {props.searchItem}
        </p>

        <br />

        {/* <div>
          {!props.movies && !isLoading ? <div>Movie not found</div> : null}
        </div> */}

        {props.movies.map((movie, index) => (
          <div key={index}>
            <div className={classes.MovieDiv}>
              <div className={classes.MovieCard}>
                <div>
                  {movie.Title} • {movie.Year}
                </div>
                <div
                // className={classes.NomBtn}
                // onClick={() => props.handleNominate(movie)}
                >
                  {/* <NominateButtonComponent
                    isNominated={props.isNominated}
                    disabled={disableNominateButton(movie.imdbID)}
                  /> */}

                  <button
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

        {!isLoading ? <div className='text-center'></div> : <Spinner />}

        {!isLoading && error ? (
          <div>
            <p style={{ textAlign: 'center' }}>Oh, no. something went wrong!</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieList;
