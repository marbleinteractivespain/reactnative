import * as types from './types';
import * as api from '../../api';

export const setHouseName = house => {
  //console.log({NAMEEEEE: house});
  const action = {
    type: types.HOUSE_CHARACTERS_UPDATE_NAME_HOUSE,
    payload: house,
  };
  return action;
};
