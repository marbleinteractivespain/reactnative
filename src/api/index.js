import axios from 'axios';
import {API_URL} from '../config/api';

const aInstance = axios.create({
  baseURL: API_URL,
  headers: {'content-type': 'application/json'},
});

export const getCharacters = async () => {
  const url = '/characters';
  const {data: resData} = await aInstance.get(url);
  return resData;
};

export const getHousesCharacters = async nameHouse => {
  
  console.log({NAMEHOUSE: nameHouse});

  const url = `/characters/house/${nameHouse}`;
  const {data: resData} = await aInstance.get(url);

  console.log({HOUSES_CHARACTERS: resData});
  return resData;
};
