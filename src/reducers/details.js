
import { GET_COIN_DETAILS, COIN_DETAILS_ERROR } from '../actions/types';

const initialState = {
    details: {},
    loading: true,
    error: {}
};

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch(type) {
        case GET_COIN_DETAILS:
            return {
                ...state,
                details: payload,
                loading: false
            };
        case COIN_DETAILS_ERROR: 
            return {
                ...state,
                error: payload,
                loading: false
            };
        default: 
            return state;
    };
};