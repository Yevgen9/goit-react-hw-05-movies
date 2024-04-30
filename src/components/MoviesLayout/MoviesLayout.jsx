import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import s from './MoviesLayout.module.scss';
import NoPosterPhoto from '../../images/pngwing.com.png';

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

        let poster = NoPosterPhoto;
        if (movie.poster_path) {
          poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        }

        return (
          <li className={s.listItem} key={movie.id}>
            <Link className={s.linkItem} to={`/movie/${movie.id}`}>
              <section className={s.thumbImg}>
                <img
                  className={s.imgItem}
                  src={poster}
                  alt={movie.original_title}
                />
              </section>
            </Link>

            <NavLink className={s.textLink} to={`/movie/${movie.id}`}>
              {nameOfMovie}
            </NavLink>
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
