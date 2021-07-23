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

  desc: {color: 'black', fontSize: 30, padding: 34},
  inputView: {
    paddingBottom: 30,
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
  textButton: {
    textAlign: 'center',
    padding: 12,
    color: 'white',
  },

  container: {
    alignItems: 'center',
    paddingTop: 40,
  },
});
