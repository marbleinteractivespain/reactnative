import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  btnImg: {
    flex: 1,
    alignItems: 'center',
  },
  boton: {
    color: 'white',
    marginVertical: 15,
    width: 200,
    height: 50,
    textAlign: 'center',
    fontFamily: 'copperplate',
    fontSize: 18,
    backgroundColor: 'red',
    paddingTop: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'red',
    overflow: 'hidden',
  },
});

export default styles;
