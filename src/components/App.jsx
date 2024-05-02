import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Style from '../AppStyle.module.scss';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const NotFound = lazy(() => import('../Pages/NotFound'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Cast = lazy(() => import('../shared/Cast/Cast'));
const Reviews = lazy(() => import('../shared/Reviews/Reviews'));

export const App = () => {
  return (
    <div className={Style.App}>
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
    </div>
  );
};
