import React, { useState } from 'react';
import MovieList from './components/MovieList';
// import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      Title: 'Star Wars: Episode VI - Return of the Jedi',
      Year: '1983',
      imdbID: 'tt0086190',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode VII - The Force Awakens',
      Year: '2015',
      imdbID: 'tt2488496',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg',
    },
    {
      Title: 'Star Wars: Episode I - The Phantom Menace',
      Year: '1999',
      imdbID: 'tt0120915',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
  ]);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
