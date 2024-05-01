import React, { useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

import NoPosterPhoto from '../../images/pngwing.com.png';
import s from './MovieCard.module.scss';

export default function MovieCard({ movieInfo }) {
  // console.log('movieInfo  ', movieInfo);

  const location = useLocation();
  // console.log(location);

  const backLinkHref = useRef(location.state?.from ?? '/');

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

  let UserScore = Number(movieInfo.vote_average * 10).toFixed(0);
  let Overview = movieInfo.overview;
  let Genres = movieInfo.genres.map(genre => genre.name).join(', ');

  return (
    <section>
      <div>
        <div>
          <NavLink to={backLinkHref.current} className={s.buttonHome}>Go Back</NavLink>
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
        <NavLink to={`/movies/${movieInfo.id}/cast`}>Cast</NavLink>
        <NavLink to={`/movies/${movieInfo.id}/reviews`}>Reviews</NavLink>
      </div>
      <Outlet />
    </section>
  );
}

// MovieCard.propTypes = {
//   MovieCard: PropTypes.string.isRequired,
// };
