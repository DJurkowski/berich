import market from '../market_data';
import { GET_COIN_MARKET_DATA, COIN_MARKET_DATA_ERROR, CLEAR_STATE_MARKET_DATA } from '../../actions/types';

const initialState = {
    market: {},
    loading: true,
    error: {}
};

let action;

beforeAll(() => {
    action = {
        type: GET_COIN_MARKET_DATA,
        payload: { name: 'Market 1', id: '1', desc:'Description', price: 'Market price' }
    };
});

it('handles action of type GET_COIN_MARKET_DATA', () => {
    const newState = market([], action);
    expect(newState).toEqual({
        loading: false,
        market: {
            name: 'Market 1', 
            id: '1', 
            desc:'Description',
            price: 'Market price'
        }
    });
});

it('checks if the loading variable set finish status and save payloads', () => {
    const newState = market([], action);
    expect(newState.loading).toEqual(false);
    expect(newState.market.id).toEqual('1');
});

it('checks the error appearance', () => {
    const error = {
        type: COIN_MARKET_DATA_ERROR,
        payload: 'Error situation'
    };

    const newState = market([], error);
    expect(newState).toEqual({
        loading: false,
        error: 'Error situation'
    });
});

it('handles action of type CLEAR_STATE_MARKET_DATA', () => {
    const clean_action = {
        type: CLEAR_STATE_MARKET_DATA
    };
    const newState = market([], clean_action);
    expect(newState).toEqual(initialState);
});