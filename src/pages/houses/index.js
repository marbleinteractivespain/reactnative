import React, {Component} from 'react';
import {SafeAreaView, Image, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';
import CardShield from '../../components/molecules/card-shield';

class House extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../assets/images/harry-potter-logo.png')}
          style={styles.logo}
        />

        <View style={styles.items}>
          <CardShield housename="Gryffindor" img="G" />
          <CardShield housename="Slytherin" img="H" />
        </View>
        <View style={styles.items}>
          <CardShield housename="Hufflepuff" img="S" />
          <CardShield housename="Ravenclaw" img="R" />
        </View>
      </SafeAreaView>
    );
  }
}

export default House;
