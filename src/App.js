import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MainHeading from './components/MainHeading';
import Input from './components/Input';
import NominatedMovies from './components/NominatedMovies';
import classes from './styles/App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');

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

  return (
    <div className={classes.Parent}>
      <div className={classes.Child1}>
        <MainHeading heading='Movies' />
        <Input searchItem={searchItem} setSearchItem={setSearchItem} />
        <MovieList movies={movies} searchItem={searchItem} />
      </div>
      <div className={classes.Child2}>
        <NominatedMovies />
      </div>
    </div>
  );
};

export default App;
