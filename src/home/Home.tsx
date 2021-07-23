import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style/home.style';
import Genre from './genremusic/genre';
import Chart from './chart/chart';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <Text>asdjkhasd</Text>
      </View>
      <View>
        <Genre />
      </View>
      <View>
        <Chart />
      </View>

      <View style={styles.content}></View>
    </ScrollView>
  );
};
export default Home;
