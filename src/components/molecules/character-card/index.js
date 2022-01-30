import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, Dimensions} from 'react-native';
import styles from './styles';

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageWidth: Dimensions.get('window').width / 2,
    };
  }

  componentDidMount() {}

  render() {
    //SE PUEDE PASAR ESTO AL CONTRUCTOR Y ASI SOLO TENERLO EN UN LADO Y NO TENER QUE ACCDER EN EL CONSTRCUCTOR A this.props.character.image????
    const {character, onCharacterPress} = this.props;
    const {imageWidth} = this.state;

    var imgCard = '';
    if (!character.image) {
     // console.log({IMG_URI404: this.imageUri});
      imgCard = (
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
      );
    } else {
      //console.log({IMG_URI: this.imageUri});
      imgCard = (
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
