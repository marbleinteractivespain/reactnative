import {connect} from 'react-redux';
import Component from './view';
import * as houseNameActions from '../../redux/houses/actions';

const mapStateToProps = state => {
  return {
    house: state.houseName.house,
  };
};

const mapDispacthToProps = dispatch => {
  return {
    // getList: () => dispatch(houseCharactersActions.getList()),
    setHouseName: house => dispatch(houseNameActions.setHouseName(house)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Component);
