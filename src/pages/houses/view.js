import React, {Component} from 'react';
import {SafeAreaView, Image, View, Text, FlatList} from 'react-native';
import styles from './styles';
import CardShield from '../../components/molecules/card-shield';
import {Actions} from 'react-native-router-flux';
import BackgroundImange from '../../components/molecules/backgroundImage';
import Logo from '../../components/molecules/logo';
import DATA from '../../model/sheilds';

class House extends Component {
  onHousepress = house => {
    this.props.setHouseName(house);

    Actions.push('Houses', {
      title: house || '',
    });
  };

  render() {

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
          color={item.color}
          onPress={this.onHousepress}
        />
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <BackgroundImange />
        <Logo />
        <Text style={styles.subtitle}>Bienivenido</Text>
        <Text style={styles.name}>{this.props.username}</Text>
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
