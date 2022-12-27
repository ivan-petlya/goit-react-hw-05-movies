import PropTypes from 'prop-types';
import { CardWrapper, CardImg, CardInfo, CardText } from './CastItem.styled';

export const CastItem = ({ imagePath, name, character }) => {
  return (
    <CardWrapper>
      <CardImg src={imagePath} alt={name} width="100" />
      <CardInfo>
        <p>{name}</p>
        <CardText> Character:{character}</CardText>
      </CardInfo>
    </CardWrapper>
  );
};
CastItem.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
