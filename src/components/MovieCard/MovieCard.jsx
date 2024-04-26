import React from 'react';
// import PropTypes from 'prop-types';

export default function MovieCard({ movieInfo }) {
  console.log('movieInfo  ', movieInfo);

  let nameOfMovie = null;
  if (movieInfo.title) {
    nameOfMovie = movieInfo.title;
  } else {
    nameOfMovie = movieInfo.name;
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
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.original_title}
          />
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
        <p>Cast</p>
        <p>Reviews</p>
      </div>
    </section>
  );
}

// MovieCard.propTypes = {
//   MovieCard: PropTypes.string.isRequired,
// };
