import React, { useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import NoPosterPhoto from '../../images/pngwing.com.png';
import s from './MovieCard.module.scss';

export default function MovieCard({ movieInfo }) {
  // console.log('movieInfo  ', movieInfo);

  const location = useLocation();
  // console.log(location);

  const backLinkHref = useRef(location.state?.from ?? '/');

  // let nameOfMovie = null;
  // if (movieInfo.title) {
  //   nameOfMovie = movieInfo.title;
  // } else {
  //   nameOfMovie = movieInfo.name;
  // }

  // let poster = NoPosterPhoto;
  // if (movieInfo.poster_path) {
  //   poster = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  // }

  const poster = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;

  let UserScore = Number(movieInfo.vote_average * 10).toFixed(0);
  let Overview = movieInfo.overview;
  let Genres = movieInfo.genres.map(genre => genre.name).join(', ');

  return (
    <section>
      <div>
        <div>
          <NavLink to={backLinkHref.current} className={s.buttonHome}>
            Go Back
          </NavLink>
        </div>
        <div className={s.imagePoster}>
          <img
            className={s.posterPhoto}
            src={poster ?? NoPosterPhoto}
            alt={movieInfo.original_title}
            width="300"
          />
        </div>
        <div className={s.movieCardRef}>
          <h1 className={s.movieCardTitle}>
            {movieInfo.title ?? movieInfo.name}
          </h1>

          <h2 className={s.movieCardTitle}>User Score: {UserScore} </h2>
          <h2 className={s.movieCardTitle}>Overview: </h2>
          <p className={s.movieCardText}>{Overview}</p>
          <h3 className={s.movieCardTitle}>Genres:</h3>
          <p className={s.movieCardText}>{Genres}</p>
        </div>
      </div>

      <div className={s.aditInfoRef}>
        <h3>Aditional information</h3>
        <div className={s.castReviews}>
          <NavLink className={s.cast} to={`/movies/${movieInfo.id}/cast`}>
            Cast
          </NavLink>
          <NavLink className={s.reviews} to={`/movies/${movieInfo.id}/reviews`}>
            Reviews
          </NavLink>
        </div>
      </div>
      <Outlet />
    </section>
  );
}

MovieCard.propTypes = {
  MovieCard: PropTypes.func,
};
