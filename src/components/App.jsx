import React, { lazy, Suspense } from 'react';
// import { Home } from 'pages/Home';
// import { SearchMovies } from 'pages/SearchMovies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Header } from './Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const LazyHeader = lazy(() => import('components/Header/Header'));
const LazyHome = lazy(() => import('pages/Home/Home'));
const LazySearchMovies = lazy(() => import('pages/SearchMovies/SearchMovies'));
const LazyMovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHeader />}>
            <Route index element={<LazyHome />} />
            <Route path="/movies" element={<LazySearchMovies />} />
            <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </>
  );
};
