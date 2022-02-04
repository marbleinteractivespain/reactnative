import {connect} from 'react-redux';
import Component from './view';
import * as characterActions from '../../redux/characters/action';

const mapStateToProps = state => {
  return {
    item: state.houseCharacters.item,
  };
};

const mapDispacthToProps = dispatch => {
  return {
    setItem: item => dispatch(characterActions.setItem(item)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Component);
