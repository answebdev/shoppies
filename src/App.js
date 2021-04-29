import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MainHeading from './components/MainHeading';
import Input from './components/Input';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=1ec7b4c0';

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  return (
    <div>
      <div>
        <MainHeading heading='Movies' />
        <Input />
      </div>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
