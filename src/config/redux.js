import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import houseCharactersReducer from '../redux/house-characters/reducer';
import houseNameReducer from '../redux/houses/reducer';

const reducer = combineReducers({
  houseCharacters: houseCharactersReducer,
  houseName: houseNameReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
