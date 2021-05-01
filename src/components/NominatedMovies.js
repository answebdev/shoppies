import React from 'react';
import RemoveNominatedMovie from './RemoveNominatedMovie';
import classes from '../styles/NominatedMovies.module.css';
import imdb from '../../src/img/imdb.webp';

const NominatedMovies = (props) => {
  return (
    <div>
      <div className={classes.TopDiv}>
        {/* <p className={classes.NominationsList}>
          <strong>Your Nominations</strong>
        </p> */}

        {props.movies.length > 0 ? (
          <p className={classes.NominationsList}>
            <strong>Your Nominations</strong>
          </p>
        ) : null}
        {/* <div className={classes.NominationsListSub}>
          <p>
            Maximum 5 nominations allowed.
            <br />
            Movies Nominated: {props.movies.length}/5
          </p>
        </div> */}

        {props.movies.length === 5 ? props.restart() : null}

        {/* {props.movies.length === 5 ? (
          <button onClick={() => props.handleReset()}>RESET</button>
        ) : null} */}

        {/* {props.movies.length === 5
        ? alert(
            'You have reached the 5 film limit. Remove any film to select a new one.'
          )
        : null} */}
      </div>

      {props.movies.map((movie, index) => (
        <div key={index}>
          <div className={classes.NomMovieDiv}>
            <div className={classes.Child}>
              <div>
                <img className={classes.PosterImg} src={movie.Poster} alt='' />
              </div>
              <div className={classes.DetailsDiv}>
                <p className={classes.MovieDetails}>
                  {movie.Title} • {movie.Year}
                </p>
                <a
                  href={`https://www.imdb.com/title/${movie.imdbID}`}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <img className={classes.Imdb} src={imdb} alt='' />
                </a>
              </div>

              <div
                className={classes.NomBtn}
                onClick={() => props.handleRemove(movie)}
              >
                <RemoveNominatedMovie isNominated={props.isNominated} />
              </div>

              {/* <div>
                  {!movie && !isLoading ? <div>Movie not found</div> : null}
                </div> */}
            </div>
          </div>
        </div>
      ))}
      {/* {props.movies.map((movie, index) => (
        <div className={classes.NominatedMovieCard} key={index}>
          <div className={classes.MovieDiv}>
            <div className={classes.MovieCard}>
              <p>{movie.Title}</p>
              <p>{movie.Year}</p>
              <p>{movie.Rated}</p>
              <p>{movie.Genre}</p>
              <img style={{ height: '100px' }} src={movie.Poster} alt='' />
              <a
                href={`https://www.imdb.com/title/${movie.imdbID}`}
                // href={`https://www.imdb.com/title/${movie.imdbID.replace(
                //   /['"]+/g,
                //   ''
                // )}`}
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
      ))} */}
    </div>
  );
};

export default NominatedMovies;
