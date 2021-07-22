import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './chart.style';

const Chart = () => {
  return (
    <>
      <View style={styles.fullComponent}>
        <Text style={{color: 'white', fontSize: 26}}>Browse All</Text>
        <ScrollView horizontal={true} style={{paddingTop: 0}}>
          <View style={styles.chart}>
            <View style={styles.item}>
              <View style={styles.box}>
                <Text>1</Text>
              </View>
              <View style={styles.box}>
                <Text>1</Text>
              </View>
              <View style={styles.box}>
                <Text>1</Text>
              </View>
              <View style={styles.box}>
                <Text>1</Text>
              </View>
              <View style={styles.box}>
                <Text>1</Text>
              </View>
              <View style={styles.box}>
                <Text>1</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Chart;
