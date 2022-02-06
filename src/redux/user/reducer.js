import * as types from './types';

const initialState = {
  username: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.USER_UPDATE_NAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
