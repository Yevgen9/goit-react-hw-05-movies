import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Style from '../shared/styles/Style.module.scss';

// import Home from '../Pages/Home';
// import Movies from '../Pages/Movies';
// import MovieDetails from '../Pages/MovieDetails';
// import NotFound from '../Pages/NotFound';
// import SharedLayout from './SharedLayout/SharedLayout';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const NotFound = lazy(() => import('../Pages/NotFound'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
