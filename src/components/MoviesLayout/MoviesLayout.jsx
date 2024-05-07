import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, useLocation } from 'react-router-dom';

import s from './MoviesLayout.module.scss';
import NoPosterPhoto from '../../images/pngwing.com.png';
import Title from 'components/Title/Title';

export default function MoviesLayout({ arrayOfMovies }) {
  //   console.log('arrayOfMovies', arrayOfMovies);

  const location = useLocation();
  // console.log(location);

  return (
    <>
      {arrayOfMovies && <Title text="Trending today" />}
      {!arrayOfMovies && <p>Sorry, there is no result!</p>}

      <ul className={s.list}>
        {arrayOfMovies.map(movie => {
          let nameOfMovie = null;
          if (movie.title) {
            nameOfMovie = movie.title;
          } else {
            nameOfMovie = movie.name;
          }

          let poster = NoPosterPhoto;
          if (movie.poster_path) {
            poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          }

          return (
            <li className={s.listItem} key={movie.id}>
              <Link
                className={s.linkItem}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <section className={s.thumbImg}>
                  <img
                    className={s.imgItem}
                    src={poster}
                    alt={movie.original_title}
                  />
                </section>
              </Link>

              <NavLink
                className={s.textLink}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {nameOfMovie}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

MoviesLayout.propTypes = {
  arrayOfMovies: PropTypes.array.isRequired,
};
