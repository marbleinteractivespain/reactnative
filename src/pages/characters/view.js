import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import LineColorNameHouse from '../../components/molecules/LineColorNameHouse';

class Characters extends Component {
  render() {
    const character = this.props.item;
    return (
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/images/gradient.png')}
          style={styles.gradient}
        />
        <View style={styles.container}>
          <Image style={styles.img} source={{uri: character.image}} />
        </View>

        <View style={styles.down}>
          <LineColorNameHouse housename={character.house} />
          <Text style={styles.title}>{character.name} </Text>
          <Text style={styles.age}>
            {character.dateOfBirth} - {character.species}
          </Text>
          <Text style={styles.wand}>WAND:</Text>
          <Text style={styles.wanditem}>
            Wood: {character.wand.wood ? character.wand.wood : '-'}
          </Text>
          <Text style={styles.wanditem}>
            Core: {character.wand.core ? character.wand.core : '-'}
          </Text>
          <Text style={styles.wanditem}>
            Length: {character.wand.length ? character.wand.length : '-'}
          </Text>
        </View>
      </View>
    );
  }
}

export default Characters;
