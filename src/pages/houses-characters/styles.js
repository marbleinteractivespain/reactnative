import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  img: {
    width: 200,
    height: 200,
  },
  name: {
    color: 'white',
    fontSize: 24,
    margin: 15,
  },
});

export default styles;
