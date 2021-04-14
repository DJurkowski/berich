import axios from 'axios';
import { GET_COIN_DETAILS, COIN_DETAILS_ERROR } from './types';

export const getDetails = (id) => async dispatch => {

    try {
        
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=en&tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`);

        dispatch({
            type: GET_COIN_DETAILS,
            payload: res.data
        });
    } catch (err) {
        
        dispatch({
            type: COIN_DETAILS_ERROR
        });
    }
};