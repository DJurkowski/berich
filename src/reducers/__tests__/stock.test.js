import stock from '../stock';
import { GET_STOCK_COINS, STOCK_COINS_ERROR } from '../../actions/types';

let action;
beforeAll(() => {
    action = {
        type: GET_STOCK_COINS,
        payload: [ { coin: 'Coin 1' }, { coin: 'Coin 2' }, { coin: 'Coin 3' }]
    };
});

it('has the correct payload size', () => {
    const newState = stock([], action);
    expect(newState.coins.length).toEqual(3);
});

it('checks if the loading variable set finish status and save payloads', () => {
    const newState = stock([], action);
    expect(newState.loading).toEqual(false);
    expect(newState.coins.length).toEqual(3);
});


it('handles action of type GET_COIN_MARKET_PRICES', () => {
    const newState = stock([], action);
    expect(newState.coins[0].coin).toEqual('Coin 1');
});