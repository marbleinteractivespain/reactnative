import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    margin:5,
    backgroudColor: colors.main,
    overflow:'hidden',
  },
  img: {
    resizeMode: 'cover',
  },
  containerName:{
    padding:10,
  },
  name: {
    color: colors.white,
    fontSize: 22,
    marginHorizontal: 5,
    marginBottom:10,
    fontFamily: 'copperplate',
    textAlign:'center',
    letterSpacing:2,
  },
});
export default styles;
