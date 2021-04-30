import React, { useState } from 'react';
import Spinner from './misc/Spinner';
import classes from '../styles/MovieList.module.css';

const MovieList = (props) => {
  const NominateButtonComponent = props.nominateComponent;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={classes.MovieDiv}>
      <div>
        <h3>Movie results for: {props.searchItem}</h3>

        <br />

        {/* <div>
          {!props.movies && !isLoading ? <div>Movie not found</div> : null}
        </div> */}

        {props.movies.map((movie, index) => (
          <div key={index}>
            <div className={classes.MovieDiv}>
              <div className={classes.MovieCard}>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <div
                  className={classes.NomBtn}
                  onClick={() => props.handleNominate(movie)}
                >
                  <NominateButtonComponent isNominated={props.isNominated} />
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
