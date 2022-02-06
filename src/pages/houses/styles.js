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
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  btnImg: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.4,
  },
  title: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'copperplate',
    letterSpacing: 4,
  },
  subtitle: {
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'copperplate',
    letterSpacing: 3,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight:'bold',
    marginVertical: 5,
    textAlign: 'center',
    fontFamily: 'copperplate',
    letterSpacing: 3,
    
  },
});

export default styles;
