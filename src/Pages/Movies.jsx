import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import Title from '../components/Title/Title';
import { getMovieByQueryFromApi } from '../components/service/Api';
import MoviesLayout from 'components/MoviesLayout/MoviesLayout';
import s from '../shared/styles/Movie.module.scss';

const Movies = () => {
  // const [query, setQuery] = useState(null);
  const [arrayOfMovies, setArrayOfMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      getMovieByQueryFromApi(query).then(data => {
        setArrayOfMovies(data.results);
      });
    }
  }, [query]);

  const handleSubmitForm = result => {
    setSearchParams({ query: result });

    getMovieByQueryFromApi(result).then(data => {
      setArrayOfMovies(data.results);
    });
  };

  // const handleSubmitForm = result => {
  //   setQuery(result);
  //   // console.log(result);

  //   getMovieByQueryFromId(result).then(data => {
  //     // console.log(data);
  //     setArrayOfMovies(data.results);
  //   });
  // };

  return (
    <div className={s.sectionForm}>
      <Title text="Search movies" />
      <SearchForm onSubmitForm={handleSubmitForm} />
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </div>
  );
};

export default Movies;
