import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsFromId } from '../components/service/Api';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieDetails() {
  const { movieId } = useParams();
  // console.log(movieId);

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovieDetailsFromId(movieId).then(data => {
      // console.log('data', data);
      setMovieInfo(data);
    });
  }, [movieId]);

  return <>{movieInfo && <MovieCard movieInfo={movieInfo} />}</>;
}
