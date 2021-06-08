const API_KEY = "f1f85eff7d76290f4217e58c8782a7d0";
const baseURL = "https://api.themoviedb.org/3";

export const fetchTrending = () =>
  `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`;

export const fetchNetflixOriginals = () =>
  `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`;

export const fetchTopRated = () =>
  `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;

export const fetchActionMovies = () =>
  `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`;

export const fetchComedyMovies = () =>
  `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`;

export const fetchHorrorMovies = () =>
  `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`;

export const fetchRomanceMovies = () =>
  `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`;

export const fetchDocumentaries = () =>
  `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`;

export const fetchDetails = movie_id =>
  `${baseURL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

export const fetchTrailer = movie_id =>
  `${baseURL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
