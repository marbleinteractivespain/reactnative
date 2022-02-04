import * as types from './types';
import * as api from '../../api';

export const setLoading = (loading = false) => {
  const action = {
    type: types.HOUSE_CHARACTERS_UPDATE_LOADING,
    payload: loading,
  };
  return action;
};

export const setList = (list = []) => {
  const action = {
    type: types.HOUSE_CHARACTERS_UPDATE_LIST,
    payload: list,
  };
  return action;
};

export const setItem = item => {
  const action = {
    type: types.HOUSE_CHARACTERS_UPDATE_ITEM,
    payload: item,
  };
  return action;
};

export const getList = () => {
  const asyncFuncAction = async (dispatch, getState) => {
    try {
      dispatch(setList([]));
      dispatch(setLoading(true));
      const house = getState().houseName.house;
      const getHousesCharactersRes = await api.getHousesCharacters(house);
      //console.log({GETSTATE: getState().houseName.house});
      const housesCharactersData = getHousesCharactersRes || [];
      //console.log({DATOS: housesCharactersData});
      dispatch(setList(housesCharactersData));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return asyncFuncAction;
};

