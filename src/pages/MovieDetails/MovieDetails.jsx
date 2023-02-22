import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { requestMovieDetails } from 'services/api';
// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
import Loader from 'components/Loader/Loader';
import {
  AdditionalInfo,
  GoBack,
  MovieContainer,
  MovieData,
  NavLinkStyled,
} from './MovieDetails.styled';
// import { StyledNavLink } from 'components/App.styled';

const LazyCast = lazy(() => import('components/Cast/Cast'));
const LazyReviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      setIsLoading(true);
      try {
        const movieDetails = await requestMovieDetails(movieId);
        // console.log(movieDetails);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails(movieId);
  }, [movieId]);

  function getGenres() {
    return movieDetails.genres.map(el => el.name).join(', ');
  }

  return (
    <>
      {isLoading && <Loader />}
      {movieDetails && (
        <div>
          <GoBack to={location.state?.from ?? '/'}>← Go back</GoBack>
          <MovieContainer>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`
                  : 'http://placehold.it/200x300'
              }
              alt="{movieDetails.title}"
            />
            <MovieData>
              <h3>
                {movieDetails.title}
                <span> ({Number.parseInt(movieDetails.release_date)})</span>
              </h3>
              <p>
                <b>Overview:</b>
              </p>
              <p>{movieDetails.overview}</p>
              <p>
                <b>Genres:</b> {getGenres()}
              </p>
            </MovieData>
          </MovieContainer>

          <AdditionalInfo>
            <NavLinkStyled
              to="cast"
              state={{ from: location.state?.from ?? '/' }}
            >
              Cast
            </NavLinkStyled>
            <NavLinkStyled
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </NavLinkStyled>
          </AdditionalInfo>

          <>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<LazyCast />} />
                <Route path="reviews" element={<LazyReviews />} />
              </Routes>
            </Suspense>
          </>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
