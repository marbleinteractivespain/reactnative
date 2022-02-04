import React, {Component} from 'react';
import {SafeAreaView, Image, View, Text, FlatList} from 'react-native';
import styles from './styles';
import CardShield from '../../components/molecules/card-shield';
import {Actions} from 'react-native-router-flux';

class House extends Component {
  image = {source: '../../assets/images/bg.jpg'};

  onHousepress = house => {
    this.props.setHouseName(house);

    Actions.push('Houses', {
      title: house || '',
    });
  };

  render() {
    const DATA = [
      {
        id: '0',
        housename: 'Gryffindor',
        img: 'G',
      },
      {
        id: '1',
        housename: 'Slytherin',
        img: 'S',
      },
      {
        id: '2',
        housename: 'Hufflepuff',
        img: 'H',
      },
      {
        id: '3',
        housename: 'Ravenclaw',
        img: 'R',
      },
    ];

    const Item = ({item}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item.housename}</Text>
      </View>
    );
    const renderItem = ({item}) => {
      return (
        <CardShield
          housename={item.housename}
          img={item.img}
          onPress={this.onHousepress}
        />
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../assets/images/bg.jpg')}
          style={styles.backgroundImage}
        />
        <Image
          source={require('../../assets/images/harry-potter-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>Bienivenido David</Text>
        <Text style={styles.title}>ELIGE UNA CASA:</Text>
        <FlatList
          data={DATA}
          numColumns={1}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
        
      </SafeAreaView>
    );
  }
}

export default House;
