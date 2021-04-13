import { combineReducers } from 'redux';
import infocoins from './infocoins';
import coinsmarket from './coinsmarket';
import stock from './stock';
import details from './details';
import market from './market_data';

export default combineReducers({
    infocoins,
    coinsmarket,
    stock,
    details,
    market
});