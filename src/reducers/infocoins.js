import { GET_INFO_COINS, INFO_COINS_ERROR } from '../actions/types';

const initialState = {
    coins: [],
    loading: true,
    error: {}
};

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case GET_INFO_COINS:
            return {
                ...state,
                coins: payload,
                loading: false
            };
        case INFO_COINS_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false
            };
        default: 
            return state;
    };
};