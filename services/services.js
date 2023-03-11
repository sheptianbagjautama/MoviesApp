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
  const resp = await axios.get(`${apiUrl}upcoming/popular?${apiKey}`);
  return resp.data.results;
};

//Get Popular TV
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}tv/popular?${apiKey}`);
  //NOTED : Agar terlihat sama seperti response di postman
  //  console.log(JSON.stringify(resp.data.results[0], null, 2));

  return resp.data.results;
};
