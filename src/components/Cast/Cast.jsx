import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieCast } from 'services/api';
import Loader from 'components/Loader/Loader';
import { ActorImage, CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async movieId => {
      setIsLoading(true);
      try {
        const movieCast = await requestMovieCast(movieId);
        // console.log(movieCast);
        setMovieCast(movieCast.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId === null) return;

    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <CastList>
        {movieCast.map(el => {
          return (
            <CastItem key={el.id}>
              <p>
                <b>Name:</b> {el.name}
              </p>
              {el.character && (
                <p>
                  <b>Character:</b> {el.character}
                </p>
              )}
              <ActorImage
                src={
                  el.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
                    : 'http://placehold.it/200x300'
                }
                alt={el.name}
              />
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
