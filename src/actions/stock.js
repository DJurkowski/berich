import axios from 'axios';

import { GET_STOCK_COINS, STOCK_COINS_ERROR } from './types';

export const getStock = (coinsPerPage, pageNumber) => async dispatch => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsPerPage}&page=${pageNumber}&sparkline=false`);

        dispatch({
            type: GET_STOCK_COINS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
};