import * as types from './types';

export const setHouseName = house => {
  const action = {
    type: types.HOUSE_CHARACTERS_UPDATE_NAME_HOUSE,
    payload: house,
  };
  return action;
};
