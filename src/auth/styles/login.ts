import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'space-between',
  },
  fullpage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined,
  },
  desc: {color: 'black', fontSize: 30, padding: 34},
  input: {
    color: 'black',
    backgroundColor: 'rgba(255,255,255, 0.6)',
    height: 50,
    minWidth: 300,
    borderRadius: 50,
    paddingLeft: 30,
  },
  banner: {
    padding: 50,
  },
  button: {
    height: 40,
    backgroundColor: 'rgba(123, 44, 191, 0.4)',
    borderRadius: 50,
    width: 100,
  },

  container: {
    flex: 0.6,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
