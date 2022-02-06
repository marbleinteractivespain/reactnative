import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';
import BackgroundImange from '../../components/molecules/backgroundImage';
import Logo from '../../components/molecules/logo';

const Form = props => {
  const [filledName, setFilledName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  //console.log(props);

  const onPressEnter = () => {
    if (filledName === '') {
      setModalVisible(true);
    } else {
      setModalVisible(false);
      props.setUserName(filledName);
      Actions.push('House');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {filledName === '' ? (
              <Text style={styles.modalText}>
                Por favor, rellena tu nombre.
              </Text>
            ) : (
              <Text style={styles.modalText}>¡Hola! {filledName}</Text>
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>
                {filledName === '' ? 'Cerrar' : 'Entrar'}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <BackgroundImange />

      <Logo />

      <View style={styles.header}>
        <Text style={styles.title}>
          NO EXISTE NI EL BIEN NI EL MAL, SOLO EXISTE EL PODER Y PERSONAS
          DEMASIADO DÉBILES PARA EJERCERLO
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu nombre"
          placeholderTextColor="white"
          underlineColorAndroid="white"
          value={filledName}
          onChangeText={text => setFilledName(text)}
        />
        {
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={onPressEnter}>
            <Text style={styles.textStyle}>ENTRAR</Text>
          </Pressable>
        }
      </View>

      <Image
        source={require('../../assets/images/hp-3.png')}
        style={styles.hp3}
      />
    </SafeAreaView>
  );
};

export default Form;
