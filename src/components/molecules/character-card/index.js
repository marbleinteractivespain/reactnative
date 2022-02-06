import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, Dimensions, View} from 'react-native';
import styles from './styles';
import LineColorNameHouse from '../LineColorNameHouse';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageWidth: Dimensions.get('window').width / 2,
    };
  }

  componentDidMount() {}

  render() {
    const {character, onCharacterPress} = this.props;
    const {imageWidth} = this.state;

    var imgCard = '';
    if (!character.image) {
      imgCard = (
        <View>
          <Image
            style={
              (styles.img,
              {
                width: imageWidth,
                height: 300,
              })
            }
            source={require('../../../assets/images/404.jpg')}
          />
          <LineColorNameHouse housename={character.house} />
        </View>
      );
    } else {
      imgCard = (
        <View>
          <Image
            style={
              (styles.img,
              {
                width: imageWidth,
                height: 300,
              })
            }
            source={{uri: character.image}}
          />
          <View style={styles.containerName}>
            <LineColorNameHouse housename={character.house} />
          </View>
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onCharacterPress(character)}>
        {imgCard}

        <Text style={styles.name}>{character.name}</Text>
      </TouchableOpacity>
    );
  }
}

CharacterCard.defaultProps = {
  character: null,
  onCharacterPress: () => {},
};

export default CharacterCard;
