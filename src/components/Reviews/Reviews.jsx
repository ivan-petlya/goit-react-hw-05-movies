import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GetApi from 'services/ThemoviedbApi/Api';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  Message,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();

    async function getReviews() {
      const fetchReviews = await GetApi.getMovieReviews(movieId);
      setReviews(fetchReviews);
    }
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsTitle>Author:{author}</ReviewsTitle>
              <p> {content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <Message>No reviews for this movie</Message>
      )}
    </>
  );
};
export default Reviews;
