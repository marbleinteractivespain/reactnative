import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

class Characters extends Component {
  render() {
    const {character} = this.props;
    return (
      <View style={styles.container}>
         <Image
          style={
            (styles.img,
            {
              width: '100%',
              height: 200,
            })
          }
          source={{uri: character.image}}
        />
        <Text style={styles.title}>{character.name} </Text>
      </View>
    );
  }
}

export default Characters;
