import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import DATA from '../../../model/sheilds';

const LineColorNameHouse = housename => {
  var colorHouse = '';
  const house = housename.housename;

  switch (house) {
    case 'Gryffindor':
      colorHouse = DATA[0].color;
      break;
    case 'Slytherin':
      colorHouse = DATA[1].color;
      break;

    case 'Hufflepuff':
      colorHouse = DATA[2].color;
      break;

    case 'Ravenclaw':
      colorHouse = DATA[3].color;
      break;
  }

  return (
    <View style={styles.house}>
      <Text style={[styles.houseStyle, {color: colorHouse}]}>{house}</Text>
      <View style={[styles.line, {backgroundColor: colorHouse}]} />
    </View>
  );
};

export default LineColorNameHouse;
