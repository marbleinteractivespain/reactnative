import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'copperplate',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  down: {
    height: 250,
    width: '100%',
    position: 'absolute',
    bottom: 20,
    padding: 30,
    zIndex: 3,
  },
  age: {
    color: colors.white,
    fontFamily: 'copperplate',
    fontSize: 16,
  },
  wand: {
    fontSize: 18,
    color: colors.white,
    fontFamily: 'copperplate',
    marginTop: 20,
    fontWeight: 'bold',
  },
  wanditem: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'copperplate',
    paddingLeft: 64,
    marginVertical: 2,
  },
  gradient: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    bottom: 0,
    // right: 0,
    // opacity: 1,
    zIndex: 2,
  },
});

export default styles;
