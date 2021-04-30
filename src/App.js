import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MainHeading from './components/MainHeading';
import Input from './components/Input';
import NominatedMovies from './components/NominatedMovies';
import NominateButtonComponent from './components/NominateButtonComponent';
import RemoveNominatedMovie from './components/RemoveNominatedMovie';
import classes from './styles/App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [nominate, setNominate] = useState([]);
  const [isNominated, setIsNominated] = useState(false);

  // const APIKEY = process.env.REACT_APP_MOVIE_API_KEY;

  useEffect(() => {
    fetchMovies(searchItem);
  }, [searchItem]);

  useEffect(() => {
    const moviesNominated = JSON.parse(localStorage.getItem('shoppies-movies'));
    if (moviesNominated) {
      setNominate(moviesNominated);
    }
  }, []);

  const saveLocalStorage = (items) => {
    localStorage.setItem('shoppies-movies', JSON.stringify(items));
  };

  const fetchMovies = async (searchItem) => {
    const url = `https://www.omdbapi.com/?s=${searchItem}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      console.log(data);
      setMovies(data.Search);
    }
  };

  const nominateMovie = (movie) => {
    const nominatedMovieList = [...nominate, movie];
    setNominate(nominatedMovieList);
    //setIsNominated(true);
    // Specific movie nominated:
    console.log(movie);
    saveLocalStorage(nominatedMovieList);
  };

  const removeNominatedMovie = (movie) => {
    const nominatedMovieList = nominate.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID
    );
    // console.log('Remove');
    setNominate(nominatedMovieList);
    setIsNominated(false);
    saveLocalStorage(nominatedMovieList);
  };

  const disableNominateButton = (movieId) => {
    return (
      nominate.length === 5 ||
      nominate.findIndex((movie) => movie.imdbID === movieId) !== -1
    );
  };

  return (
    <div className={classes.Parent}>
      <div className={classes.Child1}>
        <MainHeading heading='Movies' />
        <Input searchItem={searchItem} setSearchItem={setSearchItem} />
        <MovieList
          disableNominateButton={disableNominateButton}
          movies={movies}
          searchItem={searchItem}
          handleNominate={nominateMovie}
          nominateComponent={NominateButtonComponent}
          isNominated={isNominated}
          setIsNominated={setIsNominated}
        />
      </div>
      <div className={classes.Child2}>
        <MainHeading heading='Nominated Movies' />
        <NominatedMovies
          movies={nominate}
          handleNominate={nominateMovie}
          nominateComponent={NominateButtonComponent}
          removeComponent={RemoveNominatedMovie}
          handleRemove={removeNominatedMovie}
        />
      </div>
    </div>
  );
};

export default App;
