import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '77c88a9974e8e5cf721d75ac1e275e9a';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
  );

  return data;
};

export const fetchFilmsByQuery = async (query, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );

  return data;
};

export const requestMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );

  return data;
};

export const requestMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return data;
};

export const requestMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return data;
};
