
import { GET_COIN_MARKET_DATA, COIN_MARKET_DATA_ERROR } from '../actions/types';

const initialState = {
    market: {},
    loading: true,
    error: {}
};

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case GET_COIN_MARKET_DATA:
            return {
                ...state,
                market: payload,
                loading: false
            };
        case COIN_MARKET_DATA_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false
            };
        default: 
            return state;
    };
};