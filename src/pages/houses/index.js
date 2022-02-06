import {connect} from 'react-redux';
import Component from './view';
import * as houseNameActions from '../../redux/houses/actions';

const mapStateToProps = state => {
  return {
    house: state.houseName.house,
    username: state.userName.username,
  };
};

const mapDispacthToProps = dispatch => {
  return {
    setHouseName: house => dispatch(houseNameActions.setHouseName(house)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Component);
