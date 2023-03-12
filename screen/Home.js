import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';

const dimentions = Dimensions.get('screen');

const Home = () => {
  console.log(dimentions);
  const [moviesImages, setMoviesImages] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          );
        });
        console.log(moviesImagesArray);
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });

    getPopularMovies()
      .then(movies => {})
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View style={styles.sliderContainer}>
      <SliderBox
        images={moviesImages}
        autplay={true}
        circleLoop={true}
        sliderBoxHeight={dimentions.height / 1.5}
        dotStyle={styles.sliderStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
});

export default Home;
