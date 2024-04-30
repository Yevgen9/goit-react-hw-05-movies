// const API_KEY = 'fa4880ecea295b97ec0c0697c04c04a1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ4ODBlY2VhMjk1Yjk3ZWMwYzA2OTdjMDRjMDRhMSIsInN1YiI6IjY2MjhiZTk5Y2I2ZGI1MDBjYWFkNjYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dZiO4FGnOBDLSQeO81T0oCwzPEGAndYNnW-ORczZcxw',
  },
};

const BASE_URL = 'https://api.themoviedb.org/3/';

// -- 1

// export const getPopularMoviesFromApi = () => {
//   const URL = `${BASE_URL}trending/all/day?language=en-US`;

//   return fetch(URL, options)
//     .then(response => response.json())

//     .catch(err => console.error(err));
// };

export const getPopularMoviesFromApi = () => {
  const URL = `${BASE_URL}movie/popular?language=en-US`;

  return fetch(URL, options)
    .then(response => response.json())

    .catch(err => console.error(err));
};

// -- 2
export const getMovieDetailsFromApi = movie_Id => {
  const URL = `${BASE_URL}movie/${movie_Id}?language=en-US`;

  return fetch(URL, options)
    .then(response => response.json())
    .catch(error => console.log(error));
};

// -- 3
export const getMovieByQueryFromApi = query => {
  const URL = `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  return fetch(URL, options)
    .then(response => response.json())
    .catch(error => console.log(error));
};

// --4
export const getMovieCastByFromApi = movie_Id => {
  const URL = `${BASE_URL}movie/${movie_Id}/credits`;

  return fetch(URL, options)
    .then(response => response.json())
    .catch(error => console.log(error));
};

// -- 5
export const getMovieReviewsByFromApi = movie_Id => {
  const URL = `${BASE_URL}movie/${movie_Id}/reviews`;

  return fetch(URL, options)
    .then(response => response.json())
    .catch(error => console.log(error));
};
