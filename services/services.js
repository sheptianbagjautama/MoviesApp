import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=1a2b7b7ef669300f9fca253333e4b01b';

//Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}movie/popular?${apiKey}`);
  //NOTED : Agar terlihat sama seperti response di postman
  //  console.log(JSON.stringify(resp.data.results[0], null, 2));

  return resp.data.results;
};

//Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}movie/upcoming?${apiKey}`);
  return resp.data.results;
};

//Get Popular TV
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}tv/popular?${apiKey}`);
  return resp.data.results;
};

//Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}discover/movie?${apiKey}&with_genres=10751`,
  );
  return resp.data.results;
};

//Get Documentary Movies
export const getDocumentaryMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}discover/movie?${apiKey}&with_genres=99`,
  );
  return resp.data.results;
};

//Get Movie Detail
export const getMovie = async id => {
  const resp = await axios.get(`${apiUrl}movie/${id}?${apiKey}`);
  return resp.data;
};

//Search for Movie or TV by Keyword
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}search/${type}?${apiKey}&query=${query}`,
  );
  return resp.data.results;
};
