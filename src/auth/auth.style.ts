import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  inputView: {
    paddingBottom: 30,
  },
  input: {
    color: 'black',
    backgroundColor: 'rgba(255,255,255, 0.6)',
    height: 50,
    minWidth: 300,
    borderRadius: 50,
    paddingLeft: 30,
    padding: 14,
  },
});

export default styles;
