import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from './Movies.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';
import GetApi from 'services/ThemoviedbApi/Api';
import Notiflix from 'notiflix';

const BASE_IMAGE_URL = `https://image.tmdb.org/t/p/w500`;
const PlACEHOLDER_IMAGE_URL = `https://via.placeholder.com/100x150`;

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);
    getSearchMovies();

    //   async function searchMovies() {
    //     try {
    //       const fetchMovies = await GetApi.searchMovieQuery(query);
    //       console.log(fetchMovies);
    //       setMovies(fetchMovies);
    //     } catch (error) {
    //       console.log(`somethig wrong`);
    //       Notiflix.Notify.warning(
    //         `No movies were found matching your search. try changing your query`
    //       );
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
    // }, [query]);

    async function getSearchMovies() {
      try {
        const fetchMovies = await GetApi.fetchSearchMovies(query);
        console.log(fetchMovies);
        setMovies(fetchMovies);
      } catch (error) {
        console.log(`something wrong`);
        Notiflix.Notify.warning(
          `No movies were found matching your search. try changing your query`
        );
      } finally {
        setLoading(false);
      }
    }
  }, [query]);

  const handleFormSubmit = query => {
    setQuery(query);
    setMovies([]);
  };
  const updateQueryString = value => {
    setSearchParams(value !== '' ? { search: value } : {});
  };
  return (
    <main>
      <SearchForm
        onSubmit={handleFormSubmit}
        onChange={updateQueryString}
      ></SearchForm>
      {loading && <Loader />}
      <MoviesList>
        {movies.map(({ id, title, poster_path, vote_averange }) => (
          <MovieItem
            key={id}
            id={id}
            title={title}
            imagePath={
              poster_path ? BASE_IMAGE_URL + poster_path : PlACEHOLDER_IMAGE_URL
            }
            vote={vote_averange ? vote_averange.toFixed(1) : `No vote`}
          />
        ))}
      </MoviesList>
    </main>
  );
};
export default Movies;
