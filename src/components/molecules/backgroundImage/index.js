import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const BackgroundImange = () => (
  <Image
    source={require('../../../assets/images/bg.jpg')}
    style={styles.backgroundImage}
  />
);

export default BackgroundImange;
