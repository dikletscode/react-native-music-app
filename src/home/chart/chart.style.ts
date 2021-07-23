import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullComponent: {
    paddingTop: 40,
  },
  genre: {
    flex: 1,
    height: 250,
    padding: 10,
    flexWrap: 'wrap',
  },
  box: {
    backgroundColor: 'red',
    margin: 5,
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'row',

    width: 230,
    height: 60,
    color: 'white',
  },
  desc: {justifyContent: 'center', paddingLeft: 10, padding: 15},
  rank: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  thumbnail: {
    width: 70,
    resizeMode: 'cover',
    height: '100%',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
export default styles;
