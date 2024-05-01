import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailsFromApi } from '../components/service/Api';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  // console.log(movieId);

  const [showLoader, setShowLoader] = useState(false);

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    setShowLoader(true);
    getMovieDetailsFromApi(movieId)
      .then(data => {
        // console.log('data', data);
        setMovieInfo(data);
      })
      .finally(() => setShowLoader(false));
  }, [movieId]);

  return (
    <>
      {showLoader && <Loader />}
      {movieInfo && <MovieCard movieInfo={movieInfo} />}
    </>
  );
}
