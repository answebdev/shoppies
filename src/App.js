import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

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
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
