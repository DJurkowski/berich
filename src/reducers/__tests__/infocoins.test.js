import infocoins from '../infocoins';
import { GET_INFO_COINS, INFO_COINS_ERROR } from '../../actions/types';

let action;

beforeAll(() => {
    action = {
        type: GET_INFO_COINS,
        payload: [
            { name: 'Coin 1', id: '1', desc:'Coin description 1', price: 'Coin price 1' },
            { name: 'Coin 2', id: '2', desc:'Coin description 2', price: 'Coin price 2' },
            { name: 'Coin 3', id: '3', desc:'Coin description 3', price: 'Coin price 3' },
            ]
    };
});

it('handles action of type GET_INFO_COINS', () => {
    const newState = infocoins([], action);
    expect(newState).toEqual({
        loading: false,
        coins: [
            { name: 'Coin 1', id: '1', desc:'Coin description 1', price: 'Coin price 1' },
            { name: 'Coin 2', id: '2', desc:'Coin description 2', price: 'Coin price 2' },
            { name: 'Coin 3', id: '3', desc:'Coin description 3', price: 'Coin price 3' },
        ]
    });
});

it('checks if the loading variable set finish status and save payloads', () => {
    const newState = infocoins([], action);
    expect(newState.loading).toEqual(false);
    expect(newState.coins[0].id).toEqual('1');
});

it('checks the error appearance', () => {
    const error = {
        type: INFO_COINS_ERROR,
        payload: 'Error situation'
    };

    const newState = infocoins([], error);
    expect(newState).toEqual({
        loading: false,
        error: 'Error situation'
    });
});

it('handles wrong action type', () => {
    const wrongaction = {
        type: 'WRONG_ACTION',
        payload: []
    };
    const newState = infocoins([], wrongaction);

    expect(newState).toEqual([]);
}); 
