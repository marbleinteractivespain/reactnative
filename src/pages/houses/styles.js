import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    flex: 1,
  },
  items: {
    flex: 1,
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  btnImg: {
    width: '50%',
    height: '100%',
    padding: 10,
    justifyContent: 'center',
  },
});

export default styles;
