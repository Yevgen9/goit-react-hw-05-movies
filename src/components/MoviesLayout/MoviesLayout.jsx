import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import s from './MoviesLayout.module.scss';

const MoviesLayout = ({ arrayOfMovies }) => {
//   console.log('arrayOfMovies', arrayOfMovies);
  return (
    <ul className={s.list}>
      {/* {arrayOfMovies.map(movie => (
        <li key={movie.id}>
          <p>
            {movie.title}
            {movie.name}
          </p>
        </li>
      ))} */}

      {arrayOfMovies.map(movie => {
        let nameOfMovie = null;
        if (movie.title) {
          nameOfMovie = movie.title;
        } else {
          nameOfMovie = movie.name;
        }

        return (
          <li className={s.listItem} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <section className={s.thumbImg}>
                <img
                  className={s.imgItem}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                />

                <NavLink className={s.textLink} to={`/movie/${movie.id}`}>
                  {nameOfMovie}/
                </NavLink>
              </section>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesLayout.propTypes = {
  arrayOfMovies: PropTypes.array.isRequired,
};

export default MoviesLayout;
