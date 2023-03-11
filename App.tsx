import axios from 'axios';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

const getPopularMovies = async () => {
  const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a2b7b7ef669300f9fca253333e4b01b');
  //NOTED : Agar terlihat sama seperti response di postman
  //  console.log(JSON.stringify(resp.data.results[0], null, 2));
  
  return resp.data.results;
};

const App = () => {
  const [movie, setMovie] = useState('');
  getPopularMovies().then(movies => {
    setMovie(movies[0]); 
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Movie Name : { movie.original_title }</Text>
      <Text>Language :  { movie.original_language }</Text>
      <Text>Release Date :  { movie.release_date }</Text>
    </View>
  );
};

export default App;