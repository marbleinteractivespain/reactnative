import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.main,
    flex: 1,
  },
  title: {
    fontFamily: 'copperplate',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    lineHeight: 28,
    opacity: 0.8,
    marginVertical: 0,
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
    height: 45,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'copperplate',
    fontSize: 16,
  },
  //MODAL
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.main,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: colors.error,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 120,
    marginVertical: 15,
  },
  buttonOpen: {
    backgroundColor: colors.yellow,
  },
  buttonClose: {
    backgroundColor: colors.error,
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'copperplate',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'copperplate',
    fontSize: 22,
  },
  hp3: {
    width: '100%',
    height: 275,
    opacity: 0.8,
  },
});

export default styles;
