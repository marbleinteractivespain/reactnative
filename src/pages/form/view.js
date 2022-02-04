import React, {useState} from 'react';
import {SafeAreaView, Image, View, Text, TextInput, Button} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modal';

const Form = () => {
  const image = {source: '../../assets/images/bg.jpg'};
  const [filledName, setFilledName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onPressEnter = filledName => {
    console.log(filledName);
    //this.props.setName(house);
    // Actions.push('House', {
    //   title: '',
    // });
    /*
    - CREAR EL MODAL CON PROPIEDAD DEL  ESTADO
    - SETEAR EL ESTADO DEL MODAL 
    - CERRAR MODAL
    - CREAR REDUX PARA PASAR EL NOMBRE
    */ 
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/bg.jpg')}
        style={styles.backgroundImage}
      />
      <Image
        source={require('../../assets/images/harry-potter-logo.png')}
        style={styles.logo}
      />
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
        <Button title="Entrar" onPress={() => onPressEnter(filledName)} />
      </View>
    </SafeAreaView>
  );
};

export default Form;
