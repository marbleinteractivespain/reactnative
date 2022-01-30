import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  Text,
} from 'react-native';
import styles from './styles';
import {getCharacters} from '../../api';
import CharacterCard from '../../components/molecules/character-card';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charactersData: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getCharacterList();
  }

  getCharacterList = async () => {
    try {
      const getChacractersRes = await getCharacters();
      this.setState({
        charactersData: getChacractersRes || [],
        loading: false,
      });
    } catch (error) {
      this.setState({loading: false});
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
    const {charactersData, loading} = this.state;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>CHARACTERS</Text>
          <FlatList
            data={charactersData}
            numColumns={2}
            renderItem={({item}) => this.renderItem({item})}
            keyExtractor={item => `character-${item?.id}`}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={this.getCharacterList}
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
export default Home;
