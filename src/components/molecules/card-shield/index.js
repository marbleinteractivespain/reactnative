import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

class CardShield extends Component {
  constructor(props) {
    super(props);
  }

  onCharacterPress = housename => {
    this.props.onPress(housename);
  };

  render() {
    const {housename, img} = this.props;

    var icon = '';

    switch (img) {
      case 'G':
        icon = require('../../../assets/images/G.jpg');
        break;

      case 'H':
        icon = require('../../../assets/images/H.jpg');
        break;

      case 'S':
        icon = require('../../../assets/images/S.jpg');
        break;

      case 'R':
        icon = require('../../../assets/images/R.jpg');
        break;
    }

    var iconImg = this.props.img ? icon : '';

    return (
      <TouchableOpacity
        style={styles.btnImg}
        onPress={() => this.onCharacterPress(housename)}>
        <Image source={iconImg} style={styles.img} />
        <Text style={styles.boton}>VER PERSONAJES</Text>
      </TouchableOpacity>
    );
  }
}

export default CardShield;
