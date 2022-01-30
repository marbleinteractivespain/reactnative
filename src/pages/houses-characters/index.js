import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  Text,
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {getHousesCharacters} from '../../api';
import CharacterCard from '../../components/molecules/character-card';

class Houses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      housesCharactersData: [],
      loading: true,
      house: this.props.house,
    };
  }

  componentDidMount() {
    this.getHousesCharacterList();
  }

  getHousesCharacterList = async () => {
    try {
      const getHousesCharactersRes = await getHousesCharacters(
        this.state.house,
      );
      this.setState({
        housesCharactersData: getHousesCharactersRes || [],
        loading: false,
      });
    } catch (error) {
      this.setState({loading: true});
      console.error(error);
    }
  };

  renderItem = ({item}) => {
    const onCharacterPress = character =>
      Actions.push('Characters', {
        title: character?.name || '',
        character: character,
      });

    return (
      <CharacterCard character={item} onCharacterPress={onCharacterPress} />
    );
  };

  render() {
    const {housesCharactersData, loading} = this.state;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>{this.state.house}</Text>
          <FlatList
            data={housesCharactersData}
            numColumns={2}
            renderItem={({item}) => this.renderItem({item})}
            keyExtractor={item => `house-character-${item?.id}`}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={this.getHousesCharacterList}
                colors={['white']}
                tintColor={'white'}
              />
            }
          />
        </SafeAreaView>
      </>
    );
  }
}

export default Houses;
