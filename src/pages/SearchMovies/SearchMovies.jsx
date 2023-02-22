import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchFilmsByQuery } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';

const SearchMovies = () => {
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === null) return;

    async function fetchMovies() {
      setIsLoading(true);
      try {
        const { results } = await fetchFilmsByQuery(searchQuery);
        // console.log(results);

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies(searchQuery);
  }, [searchQuery]);

  const handleSubmit = searchValue => {
    setSearchParams({ query: searchValue });
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} defaultValue={searchQuery} />
      {isLoading && <Loader />}
      {/* {searchQuery && <p>Search results for the request "{searchQuery}"</p>} */}

      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <p>There are no movies for your request</p>
      )}
    </>
  );
};

export default SearchMovies;
