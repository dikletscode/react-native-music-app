import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style/home.style';
import Chart from './musicChart/charts';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <Text>asdjkhasd</Text>
      </View>
      <View>
        <Chart />
      </View>
      <View style={styles.content}></View>
    </ScrollView>
  );
};
export default Home;
