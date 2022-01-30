import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroudColor: colors.main,
  },
  img: {
    resizeMode: 'cover',
  },
  name: {
    color: colors.white,
    fontSize: 24,
    margin: 15,
  },
});
export default styles;
