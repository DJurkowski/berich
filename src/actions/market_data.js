import axios from 'axios';

import { GET_COIN_MARKET_DATA, COIN_MARKET_DATA_ERROR } from './types';

export const getCoinMarketData = (id, currency='usd', days=7) => async dispatch => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`);

        dispatch({
            type: GET_COIN_MARKET_DATA,
            payload: res.data
        });

    } catch (err) {
        console.log(err);
    }
};
