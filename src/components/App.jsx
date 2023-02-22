import React, { lazy, Suspense } from 'react';
// import { Home } from 'pages/Home';
// import { SearchMovies } from 'pages/SearchMovies';
// import { MovieDetails } from 'pages/MovieDetails';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Header, Main, Nav, StyledNavLink } from './App.styled';

const LazyHome = lazy(() => import('pages/Home/Home'));
const LazySearchMovies = lazy(() => import('pages/SearchMovies'));
const LazyMovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Search movies</StyledNavLink>
        </Nav>
      </Header>

      <Main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/movies" element={<LazySearchMovies />} />
            <Route path="/movies/:movieId/*" element={<LazyMovieDetails />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Suspense>
      </Main>
    </>
  );
};
