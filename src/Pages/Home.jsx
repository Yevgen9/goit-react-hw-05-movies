import React, { useEffect, useState } from 'react';
import { getPopularMoviesFromApi } from '../components/service/Api';
import MoviesLayout from 'components/MoviesLayout/MoviesLayout';
import Title from '../components/Title/Title';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);

  useEffect(() => {
    getPopularMoviesFromApi().then(data => {
      //   console.log(data);
      setArrayOfMovies(data.results);
    });
  }, []);

  return (
    <>
      {arrayOfMovies && <Title text="Trending today" />}
      {!arrayOfMovies && <p>Sorry, there is no result!</p>}

      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}

      <div>Home</div>
    </>
  );
};

export default Home;
