import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MainHeading from './components/MainHeading';
import Input from './components/Input';
import NominatedMovies from './components/NominatedMovies';
import NominateButtonComponent from './components/NominateButtonComponent';
import classes from './styles/App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [nominate, setNominate] = useState([]);

  useEffect(() => {
    fetchMovies(searchItem);
  }, [searchItem]);

  const fetchMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchItem}&apikey=1ec7b4c0`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      // console.log(data);
      setMovies(data.Search);
    }
  };

  const nominateMovie = (movie) => {
    const nominatedMovieList = [...nominate, movie];
    setNominate(nominatedMovieList);
    console.log('Nominated');
  };

  return (
    <div className={classes.Parent}>
      <div className={classes.Child1}>
        <MainHeading heading='Movies' />
        <Input searchItem={searchItem} setSearchItem={setSearchItem} />
        <MovieList
          movies={movies}
          searchItem={searchItem}
          handleNominate={nominateMovie}
          nominateComponent={NominateButtonComponent}
        />
      </div>
      <div className={classes.Child2}>
        <MainHeading heading='Nominated Movies' />
        {/* <NominatedMovies movies={nominate} /> */}
        <NominatedMovies
          movies={nominate}
          handleNominate={nominateMovie}
          nominateComponent={NominateButtonComponent}
        />
      </div>
    </div>
  );
};

export default App;
