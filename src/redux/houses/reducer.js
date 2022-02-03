import * as types from './types';

const initialState = {
  house: '',
};

const reducer = (state = initialState, action = {}) => {
  //console.log({state, action});
  switch (action.type) {
    case types.HOUSE_CHARACTERS_UPDATE_NAME_HOUSE:
      return {
        ...state,
        house: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
