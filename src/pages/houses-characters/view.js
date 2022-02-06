import React, {Component} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import CharacterCard from '../../components/molecules/character-card';

class Houses extends Component {
  componentDidMount() {
    this.props.getList();
  }

  renderItem = ({item}) => {
    const onCharacterPress = character => {
      this.props.setItem(item);
      Actions.push('Characters', {
        title: character?.name || '',
      });
    };
    return (
      <CharacterCard character={item} onCharacterPress={onCharacterPress} />
    );
  };

  render() {
    const {list, loading} = this.props;
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={list}
            numColumns={2}
            renderItem={({item}) => this.renderItem({item})}
            keyExtractor={item => `house-character-${item?.id}`}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={this.props.getList}
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
