import {connect} from 'react-redux';
import Component from './view';
import * as houseCharactersActions from '../../redux/house-characters/actions';

const mapStateToProps = state => {
  return {
    loading: state.houseCharacters.loading,
    list: state.houseCharacters.list,
  };
};

const mapDispacthToProps = dispatch => {
  return {
    getList: () => dispatch(houseCharactersActions.getList()),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Component);
