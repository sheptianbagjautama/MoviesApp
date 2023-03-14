import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  getDocumentaryMovies,
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const dimentions = Dimensions.get('screen');

const Home = () => {
  console.log(dimentions);
  const [moviesImages, setMoviesImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState([{}]);
  const [popularTv, setPopularTv] = useState([{}]);
  const [familyMovies, setFamilyMovies] = useState([{}]);
  const [documentaryMovies, setDocumentaryMovies] = useState([{}]);
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
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });

    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });

    getPopularTv()
      .then(movies => {
        setPopularTv(movies);
      })
      .catch(err => {
        setError(err);
      });

    getFamilyMovies()
      .then(movies => {
        setFamilyMovies(movies);
      })
      .catch(err => {
        setError(err);
      });

    getDocumentaryMovies()
      .then(movies => {
        setDocumentaryMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <SliderBox
            images={moviesImages}
            autplay={true}
            circleLoop={true}
            sliderBoxHeight={dimentions.height / 1.5}
            dotStyle={styles.sliderStyle}
          />
        </View>
        <View style={styles.carousel}>
          <List title="Popular Movies" content={popularMovies} />
        </View>
        <View style={styles.carousel}>
          <List title="Popular TV Shows" content={popularTv} />
        </View>
        <View style={styles.carousel}>
          <List title="Family Movies" content={familyMovies} />
        </View>
        <View style={styles.carousel}>
          <List title="Documentary Movies" content={documentaryMovies} />
        </View>
      </ScrollView>
    </React.Fragment>
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
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
