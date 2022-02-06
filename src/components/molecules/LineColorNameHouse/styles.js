import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  house: {
    flexDirection: 'row',
  },
  houseStyle: {
    color: colors.white,
    fontFamily: 'copperplate',
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    backgroundColor: colors.white,
    height: 2,
    width: '20%',
    marginVertical: 10,
    flex: 1,
  },
});

export default styles;
