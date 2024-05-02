import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'shared/Loader/Loader';

import SearchForm from '../components/SearchForm/SearchForm';
import Title from '../components/Title/Title';
import { getMovieByQueryFromApi } from '../components/service/Api';
import MoviesLayout from 'components/MoviesLayout/MoviesLayout';

const Movies = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (query) {
      setShowLoader(true);

      getMovieByQueryFromApi(query)
        .then(data => {
          setArrayOfMovies(data.results);
        })
        .finally(() => setShowLoader(false));
    }
  }, [query]);

  const handleSubmitForm = result => {
    setSearchParams({ query: result });

    setShowLoader(true);

    getMovieByQueryFromApi(result)
      .then(data => {
        setArrayOfMovies(data.results);
      })
      .finally(() => setShowLoader(false));
  };

  return (
    <div>
      {showLoader && <Loader />}

      <Title text="Search movies" />
      <SearchForm onSubmitForm={handleSubmitForm} />
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </div>
  );
};

export default Movies;
