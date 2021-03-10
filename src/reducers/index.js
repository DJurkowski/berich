import { combineReducers } from 'redux';
import infocoins from './infocoins';
import coinsmarket from './coinsmarket';
import stock from './stock';

export default combineReducers({
    infocoins,
    coinsmarket,
    stock
});