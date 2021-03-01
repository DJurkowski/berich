import { GET_COIN_MARKET_PRICES } from '../actions/types';

const initialState = {
    prices: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case GET_COIN_MARKET_PRICES: 
            return {
                ...state,
                prices: [...payload],
                loading: false
            };
        default: 
            return state;
    };
};