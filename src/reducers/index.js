import { combineReducers } from 'redux';
import infocoins from './infocoins';
import coinsmarket from './coinsmarket';

export default combineReducers({
    infocoins,
    coinsmarket
});