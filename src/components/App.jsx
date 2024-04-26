import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import MovieDetails from '../Pages/MovieDetails';
import NotFound from '../Pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import Style from '../shared/styles/Style.module.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
