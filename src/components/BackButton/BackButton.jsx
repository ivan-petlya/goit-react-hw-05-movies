import { StyledLink } from './BackButton.styled';
import { useLocation } from 'react-router-dom';
export const BackButton = ({ children }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return <StyledLink to={backLinkHref}>{children}</StyledLink>;
};
