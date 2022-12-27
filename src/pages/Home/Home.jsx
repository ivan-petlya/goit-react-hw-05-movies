import GetApi from 'services/ThemoviedbApi/Api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { MoviesList, HomeTitle } from './Home.styled';
const BASE_IMAGE_URL = `https://image.tmdb.org/t/p/w500`;
const PlACEHOLDER_IMAGE_URL = `https://via.placeholder.com/100x150`;

const Home = () => {
  const [trandMovies, setTrandMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTrandingMovies();

    async function getTrandingMovies() {
      try {
        const fetchMovies = await GetApi.getTrendingMovies();
        setTrandMovies(fetchMovies);
      } catch (error) {
        console.log(`something wrong`);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  return (
    <main>
      <HomeTitle> Tranding today</HomeTitle>
      {loading && <Loader />}
      <MoviesList>
        {trandMovies.map(({ id, title, poster_path, vote_averange }) => (
          <MovieItem
            key={id}
            id={id}
            title={title}
            imagePath={
              poster_path ? BASE_IMAGE_URL + poster_path : PlACEHOLDER_IMAGE_URL
            }
            vote={vote_averange ? vote_averange.toFied(1) : `no vote`}
          />
        ))}
      </MoviesList>
    </main>
  );
};

export default Home;
