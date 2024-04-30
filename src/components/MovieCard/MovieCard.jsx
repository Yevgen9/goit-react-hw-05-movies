import React from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import NoPosterPhoto from '../../images/pngwing.com.png';
import s from './MovieCard.module.scss';

export default function MovieCard({ movieInfo }) {
  console.log('movieInfo  ', movieInfo);

  let nameOfMovie = null;
  if (movieInfo.title) {
    nameOfMovie = movieInfo.title;
  } else {
    nameOfMovie = movieInfo.name;
  }

  let poster = NoPosterPhoto;
  if (movieInfo.poster_path) {
    poster = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  }

  let UserScore = movieInfo.vote_average * 10;
  let Overview = movieInfo.overview;
  let Genres = movieInfo.genres.map(genre => genre.name).join(', ');

  return (
    <section>
      <div>
        <div>
          <p>Go Back</p>
        </div>
        <div className={s.imagePoster}>
          <img src={poster} alt={movieInfo.original_title} width="300" />
        </div>
        <div>
          <h1>{nameOfMovie}</h1>
          <p>User Score: {UserScore} </p>
          <h2>Overview: </h2>
          <p>{Overview}</p>
          <h3>Genres:</h3>
          <p>{Genres}</p>
        </div>
      </div>

      <div>
        <h3>Aditional information</h3>
        {/* <NavLink to={`/movies/${movieInfo}/cast`}>Cast</NavLink>
        <NavLink to={'/movies/:movieId/reviews'}>Reviews</NavLink> */}
      </div>
    </section>
  );
}

MovieCard.propTypes = {
  MovieCard: PropTypes.string.isRequired,
};
