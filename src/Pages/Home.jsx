import React, { useEffect, useState } from 'react';

import { getPopularMoviesFromApi } from '../components/service/Api';
import MoviesLayout from 'components/MoviesLayout/MoviesLayout';

import Loader from 'shared/Loader/Loader';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getPopularMoviesFromApi()
      .then(data => {
        //   console.log(data);
        setArrayOfMovies(data.results);
      })
      .finally(() => setShowLoader(false));
  }, []);

  return (
    <>
      {showLoader && <Loader />}

      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </>
  );
};

export default Home;
