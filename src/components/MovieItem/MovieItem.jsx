import {
  MoviesCard,
  MoviesImg,
  MoviesCardInfo,
  MoviesTitle,
  MoviesVote,
  StyledLink,
} from './MovieItem.styled';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieItem = ({ id, title, imagePath, vote }) => {
  const { pathname, search } = useLocation();
  const fromPage = `${pathname}${search}`;

  return (
    <MoviesCard>
      <StyledLink to={`/movies/${id}`} state={{ from: fromPage }}>
        <MoviesImg src={imagePath} alt={title} />
        <MoviesCardInfo>
          <MoviesTitle>{title}</MoviesTitle>
          <MoviesVote>{vote}</MoviesVote>
        </MoviesCardInfo>
      </StyledLink>
    </MoviesCard>
  );
};

MovieItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
