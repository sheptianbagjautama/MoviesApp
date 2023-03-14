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
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();
  const [error, setError] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            );
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
        },
      )
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <React.Fragment>
      <ScrollView>
        {moviesImages && (
          <View style={styles.sliderContainer}>
            <SliderBox
              images={moviesImages}
              autplay={true}
              circleLoop={true}
              sliderBoxHeight={dimentions.height / 1.5}
              dotStyle={styles.sliderStyle}
            />
          </View>
        )}
        {popularMovies && (
          <View style={styles.carousel}>
            <List title="Popular Movies" content={popularMovies} />
          </View>
        )}
        {popularTv && (
          <View style={styles.carousel}>
            <List title="Popular TV Shows" content={popularTv} />
          </View>
        )}

        {familyMovies && (
          <View style={styles.carousel}>
            <List title="Family Movies" content={familyMovies} />
          </View>
        )}

        {documentaryMovies && (
          <View style={styles.carousel}>
            <List title="Documentary Movies" content={documentaryMovies} />
          </View>
        )}
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
