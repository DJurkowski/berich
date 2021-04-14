import axios from 'axios';

import { GET_INFO_COINS, INFO_COINS_ERROR, GET_COIN_MARKET_PRICES } from './types';

export const getCoins = () => async dispatch => {
    try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false');

        dispatch({
            type: GET_INFO_COINS,
            payload: res.data
        });

    } catch (err) {
        console.log(err);
    }
};

export const getCoinMarketPrices = (ids) => async dispatch => {
    try {
        const promises = [];

        for(const id of ids) {
            let res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`);
            promises.push({name: id, prices: res.data.prices.map(price => price[1])});
        }

        Promise.all(promises).then((values) => {
            dispatch({
                type: GET_COIN_MARKET_PRICES,
                payload: values
            });
        });

    } catch (err) {
        console.log(err);
    }
};