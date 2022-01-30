import React, {Component} from 'react';
import {SafeAreaView, Image, TouchableOpacity, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './styles';

class CardShield extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {housename, img} = this.props;

    var icon = '';
    const onCharacterPress = house =>
      Actions.push('Houses', {
        title: house || '',
        house: house,
      });

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
        onPress={house => onCharacterPress(housename)}>
        <Image source={iconImg} style={styles.img} />
      </TouchableOpacity>
    );
  }
}

export default CardShield;
