import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import MovieDetails from '../Pages/MovieDetails';
import NotFound from '../Pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Style from '../shared/styles/Style.module.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
