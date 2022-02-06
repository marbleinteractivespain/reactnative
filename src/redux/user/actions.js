import * as types from './types';

export const setUserName = username => {
  const action = {
    type: types.USER_UPDATE_NAME,
    payload: username,
  };
  return action;
};
