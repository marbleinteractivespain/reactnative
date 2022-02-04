import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    flex: 1,
  },
  /* TODO: BACKGROUND PASARLO A MOLECULA */
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.4,
  },
  /* TODO: LOGO PASARLO A MOLECULA */
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'copperplate',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    padding: 20,
    lineHeight: 28,
    opacity: 0.8,
    marginVertical:25,
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 10,
    width: '65%',
    height: 50,
    marginTop:10,
    textAlign:'center',
    fontFamily:'copperplate',
    fontSize:16,
  },
});

export default styles;
