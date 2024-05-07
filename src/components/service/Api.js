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
//   const URL = `${BASE_URL}movie/popular?language=en-US`;

//   return fetch(URL, options)
//     .then(response => response.json())

//     .catch(err => console.error(err));
// };

export const getPopularMoviesFromApi = async () => {
  const URL = `${BASE_URL}movie/popular?language=en-US`;

  try {
    const response = await fetch(URL, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

// -- 2
export const getMovieDetailsFromApi = async movie_Id => {
  const URL = `${BASE_URL}movie/${movie_Id}?language=en-US`;

  try {
    const response = await fetch(URL, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// -- 3
export const getMovieByQueryFromApi = async query => {
  const URL = `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await fetch(URL, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// --4
export const getMovieCastByFromApi = async movie_Id => {
  const URL = `${BASE_URL}movie/${movie_Id}/credits`;
  try {
    const response = await fetch(URL, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// -- 5
export const getMovieReviewsByFromApi = async movie_Id => {
  const URL = `${BASE_URL}movie/${movie_Id}/reviews`;

  try {
    const response = await fetch(URL, options);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
