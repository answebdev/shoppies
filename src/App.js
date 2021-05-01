import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MainHeading from './components/MainHeading';
import ResultsHeader from './components/ResultsHeader';
import Input from './components/Input';
import NominatedMovies from './components/NominatedMovies';
import NominateButtonComponent from './components/NominateButtonComponent';
import RemoveNominatedMovie from './components/RemoveNominatedMovie';
import Swal from 'sweetalert2';
import classes from './styles/App.module.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [nominate, setNominate] = useState([]);
  const [isNominated, setIsNominated] = useState(false);

  useEffect(() => {
    fetchMovies(searchItem);
  }, [searchItem]);

  useEffect(() => {
    const moviesNominated = JSON.parse(localStorage.getItem('shoppies-movies'));
    if (moviesNominated) {
      setNominate(moviesNominated);
    }
  }, []);

  // Save nominated movies to local storage
  const saveLocalStorage = (items) => {
    localStorage.setItem('shoppies-movies', JSON.stringify(items));
  };

  // ORIGINAL REQUEST
  // const fetchMovies = async (searchItem) => {
  //   const url = `https://www.omdbapi.com/?s=${searchItem}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

  //   const response = await fetch(url);
  //   const data = await response.json();

  //   if (data.Search) {
  //     console.log(data);
  //     setMovies(data.Search);
  //   }
  // };

  // Fetch movie data
  const fetchMovies = async (searchItem) => {
    const url = `https://www.omdbapi.com/?s=${searchItem}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });

    if (data.Search) {
      setMovies(data.Search);
    }
  };

  // Nominate a movie
  const nominateMovie = (movie) => {
    const nominatedMovieList = [...nominate, movie];
    setNominate(nominatedMovieList);
    saveLocalStorage(nominatedMovieList);
  };

  // Remove nominated movie from list
  const removeNominatedMovie = (movie) => {
    const nominatedMovieList = nominate.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID
    );
    setNominate(nominatedMovieList);
    setIsNominated(false);
    saveLocalStorage(nominatedMovieList);
  };

  // Disable Nominate button(s) after clicking or after 5 movies have been nominated
  const disableNominateButton = (movieId) => {
    return (
      nominate.length === 5 ||
      nominate.findIndex((movie) => movie.imdbID === movieId) !== -1
    );
  };

  // Reset when Restart button is clicked
  const handleReset = () => {
    setMovies([]);
    setNominate([]);
    setSearchItem('');
    saveLocalStorage('');
  };

  // Popup banner that shows after 5 movies have been nominated
  const restart = () => {
    Swal.fire({
      title: 'Great Picks!',
      text:
        'You have reached the 5 film limit. Remove any film to select a new one, or click Restart to start over.',
      imageUrl:
        'https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'The Shoppies',
      showCancelButton: true,
      confirmButtonColor: '#008060',
      cancelButtonColor: '#95bf47',
      confirmButtonText: 'Restart',
    }).then((result) => {
      if (result.isConfirmed) {
        handleReset();
        Swal.close();
      }
    });
  };

  return (
    <div>
      <div>
        <MainHeading />
        <Input
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          nominate={nominate}
        />
      </div>

      <div className={classes.BigChild}>
        <div className={classes.Child1}>
          <div className={classes.ResultsDiv}>
            <ResultsHeader searchItem={searchItem} />
          </div>

          <MovieList
            disableNominateButton={disableNominateButton}
            movies={movies}
            handleNominate={nominateMovie}
            nominateComponent={NominateButtonComponent}
            isNominated={isNominated}
            setIsNominated={setIsNominated}
          />
        </div>

        <div className={classes.Child2}>
          {/* <MainHeading heading='Nominated Movies' /> */}
          <NominatedMovies
            movies={nominate}
            handleNominate={nominateMovie}
            nominateComponent={NominateButtonComponent}
            removeComponent={RemoveNominatedMovie}
            handleRemove={removeNominatedMovie}
            restart={restart}
          />
        </div>
      </div>
    </div>

    // <div className={classes.Parent}>
    //   <div className={classes.Child1}>
    //     <MainHeading heading='Movies' />
    //     <Input
    //       searchItem={searchItem}
    //       setSearchItem={setSearchItem}
    //       nominate={nominate}
    //     />
    //     <MovieList
    //       disableNominateButton={disableNominateButton}
    //       movies={movies}
    //       searchItem={searchItem}
    //       handleNominate={nominateMovie}
    //       nominateComponent={NominateButtonComponent}
    //       isNominated={isNominated}
    //       setIsNominated={setIsNominated}
    //     />
    //   </div>
    //   <div className={classes.Child2}>
    //     <MainHeading heading='Nominated Movies' />
    //     <NominatedMovies
    //       movies={nominate}
    //       handleNominate={nominateMovie}
    //       nominateComponent={NominateButtonComponent}
    //       removeComponent={RemoveNominatedMovie}
    //       handleRemove={removeNominatedMovie}
    //     />
    //   </div>
    // </div>
  );
};

export default App;
