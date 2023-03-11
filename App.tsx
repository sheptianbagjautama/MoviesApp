import axios from 'axios';
import React from 'react';
import { Text, View } from 'react-native';

const getPopularMovies = async () => {
     const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a2b7b7ef669300f9fca253333e4b01b');
     //Agar terlihat sama seperti response di postman
     console.log(JSON.stringify(resp.data.results[0], null, 2));
};

const App = () => {
  getPopularMovies();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default App;