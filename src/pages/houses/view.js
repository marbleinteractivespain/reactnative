import React, {Component} from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import styles from './styles';
import CardShield from '../../components/molecules/card-shield';
import {Actions} from 'react-native-router-flux';

class House extends Component {
  onHosepress = house => {
    this.props.setHouseName(house);
    
    Actions.push('Houses', {
      title: house || '',
      house: house,
    });
  };
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../assets/images/harry-potter-logo.png')}
          style={styles.logo}
        />

        <View style={styles.items}>
          <CardShield
            housename="Gryffindor"
            img="G"
            onPress={this.onHosepress}
          />
          <CardShield
            housename="Slytherin"
            img="H"
            onPress={this.onHosepress}
          />
        </View>
        <View style={styles.items}>
          <CardShield
            housename="Hufflepuff"
            img="S"
            onPress={this.onHosepress}
          />
          <CardShield
            housename="Ravenclaw"
            img="R"
            onPress={this.onHosepress}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default House;
