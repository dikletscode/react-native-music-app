import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import styles from './chart.style';

const Chart = () => {
  return (
    <>
      <View style={styles.fullComponent}>
        <Text style={{color: 'white', fontSize: 26}}>Indonesian Top 20</Text>
        <ScrollView horizontal={true} style={{paddingTop: 0}}>
          <View style={styles.genre}>
            <View style={styles.item}>
              <View style={styles.box}>
                <Image
                  source={require('../dummydata/isyana.png')}
                  style={styles.thumbnail}
                />
                <View style={styles.rank}>
                  <Text style={{color: 'white'}}> 1</Text>
                </View>
                <View style={styles.desc}>
                  <Text style={{color: 'white'}}>Unlock The Key</Text>
                  <Text style={{color: 'white'}}>Isyana Sarasvati</Text>
                </View>
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
