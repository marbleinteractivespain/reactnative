import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 32,
  },
});

export default styles;
