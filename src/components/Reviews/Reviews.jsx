import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieReviews } from 'services/api';
import Loader from 'components/Loader/Loader';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async movieId => {
      setIsLoading(true);
      try {
        const movieReviews = await requestMovieReviews(movieId);
        setMovieReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId === null) return;

    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(el => {
            return (
              <ReviewsItem key={el.id}>
                <p>
                  <b>Name:</b> {el.author}
                </p>
                <p>
                  <i>{el.content}</i>
                </p>
              </ReviewsItem>
            );
          })}
        </ReviewsList>
      ) : (
        <p>There are no reviews for this film yet</p>
      )}
    </>
  );
};

export default Reviews;
