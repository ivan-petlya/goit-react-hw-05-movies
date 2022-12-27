// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews
// for tranding
// const URL_TRANDING = 'https://api.themoviedb.org/3/trending/movie/day';
// // for search by name
// const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';
// // for details
// const URL_FILM_ADD_INFO = 'https://api.themoviedb.org/3/movie/';

import axios from 'axios';
const API_KEY = '97c31631b31361f75213aa46907a2e0a';

const apiCase = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

async function getTrendingMovies() {
  const response = await apiCase.get('trending/movie/day');
  const trendingMovies = response.data.results;
  if (!trendingMovies.length) {
    throw new Error(`Sorry, there are no movies.`);
  }
  return trendingMovies;
}

async function getMovieById(id) {
  const { data } = await apiCase.get(`movie/${id}`);
  return data;
}

async function searchMovieQuery(query) {
  const { response } = await apiCase.get(`search/movie/?query=${query}`);
  const searchMovies = response.data.results;
  if (!searchMovies.length) {
    throw new Error('Nothing was found for your request');
  }
  return searchMovies;
}

async function fetchSearchMovies(query) {
  const response = await apiCase.get(`search/movie?query=${query}`);

  const searchMovies = response.data.results;

  if (!searchMovies.length) {
    throw new Error(
      `Sorry, there are no movies matching your search query. Please try again.`
    );
  }

  return searchMovies;
}

async function getMovieCredits(id) {
  const response = await apiCase.get(`movie/${id}/credits`);
  const cast = response.data.cast;
  if (!cast.length) {
    throw new Error('cast not found');
  }
  return cast;
}

async function getMovieReviews(id) {
  const response = await apiCase.get(`movie/${id}/reviews`);
  const reviews = response.data.results;
  if (!reviews) {
    throw new Error(`reviews not found`);
  }
  return reviews;
}

const GetApi = {
  getTrendingMovies,
  getMovieById,
  searchMovieQuery,
  fetchSearchMovies,
  getMovieCredits,
  getMovieReviews,
};

export default GetApi;
