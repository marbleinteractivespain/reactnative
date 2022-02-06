import {connect} from 'react-redux';
import Component from './view';
import * as userActions from '../../redux/user/actions';

const mapStateToProps = state => {
  return {
    username: state.userName.username,
  };
};

const mapDispacthToProps = dispatch => {
  return {
    setUserName: username => dispatch(userActions.setUserName(username)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Component);
