import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RemoveNominatedMovie from './RemoveNominatedMovie';
import classes from '../styles/NominatedMovies.module.css';
import imdb from '../../src/img/imdb.webp';

const NominatedMovies = (props) => {
  return (
    <div>
      <div className={classes.TopDiv}>
        {props.movies.length > 0 ? (
          <p className={classes.NominationsList}>
            <strong>Nominations</strong>
          </p>
        ) : null}
        {props.movies.length === 5 ? props.restart() : null}
      </div>

      <TransitionGroup>
        {props.movies.map((movie, index) => (
          <CSSTransition
            key={movie.imdbID}
            timeout={props.movies.length === 5 ? 0 : 500}
            classNames={props.movies.length === 5 ? '' : 'item'}
          >
            <div key={index}>
              <div className={classes.NomMovieDiv}>
                <div className={classes.Child}>
                  <div>
                    <img
                      className={classes.PosterImg}
                      src={movie.Poster}
                      alt=''
                    />
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
                </div>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default NominatedMovies;
