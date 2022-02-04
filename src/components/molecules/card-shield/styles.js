import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '75%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  btnImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    color: 'white',
    marginVertical: 20,
    width: 200,
    height: 60,
    textAlign: 'center',
    fontFamily: 'copperplate',
    fontSize: 18,
    backgroundColor: 'red',
    paddingTop: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'red',
    overflow: 'hidden',
  },
});

export default styles;
