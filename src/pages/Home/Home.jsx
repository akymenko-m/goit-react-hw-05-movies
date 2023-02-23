import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';
import Loader from 'components/Loader/Loader';
import { Title } from './Home.styled';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const movies = await getTrendingMovies();
        // console.log(movies.results);
        setTrandingMovies(movies.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title>Tranding movies</Title>
          <MoviesList movies={trandingMovies} />
        </>
      )}
    </div>
  );
};

export default Home;
