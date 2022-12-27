import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import GetApi from 'services/ThemoviedbApi/Api';
import { BackButton } from 'components/BackButton/BackButton';
import {
  MovieBox,
  MovieImg,
  MovieInfo,
  MovieGenres,
  MovieAdditionalBox,
  MovieAdditionalTitle,
  MovieAdditionalList,
  Link,
} from './MovieDetails.styled';

const BASE_IMAGE_URL = `https://image.tmdb.org/t/p/w500`;
const PlACEHOLDER_POSTER_URL = `https://placehold.jp/200x300.png`;

const MovieDatails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { pathname, search } = useLocation();
  const fromPage = `${pathname}${search}`;

  useEffect(() => {
    getMovieById();

    async function getMovieById() {
      try {
        const fetchMovie = await GetApi.getMovieById(Number(movieId));
        setMovie(fetchMovie);
      } catch (error) {
        console.log(`something wrong`);
      }
    }
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  const imagePath = poster_path
    ? BASE_IMAGE_URL + poster_path
    : PlACEHOLDER_POSTER_URL;

  const year = release_date ? release_date.slice(0, 4) : `without year`;

  const userScore = () => {
    return Math.round(vote_average * 10);
  };

  return (
    <main>
      <BackButton> go back</BackButton>

      <MovieBox>
        <MovieImg src={imagePath} alt={title} width="60%" height="60%" />
        <MovieInfo>
          <p>
            <b>{title}</b>
            <span>({year})</span>
          </p>
          <p>
            <b>User Score:</b> <i>{userScore()}%</i>
          </p>
          <p>
            <b>Overview: </b>
            <i>{overview}</i>
          </p>
          <p>
            <b>Genres:</b>
          </p>
          <MovieGenres>
            {genres?.map(({ id, name }) => (
              <li key={id}>
                <i>{name}</i>
              </li>
            ))}
          </MovieGenres>
        </MovieInfo>
      </MovieBox>
      <MovieAdditionalBox>
        <MovieAdditionalTitle> Additional infomation</MovieAdditionalTitle>
        <MovieAdditionalList>
          <li>
            <Link to="cast" state={{ from: fromPage }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: fromPage }}>
              reviews
            </Link>
          </li>
        </MovieAdditionalList>
      </MovieAdditionalBox>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDatails;
