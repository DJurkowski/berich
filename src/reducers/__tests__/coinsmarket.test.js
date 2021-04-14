import coinsmarket from '../coinsmarket';
import { GET_COIN_MARKET_PRICES } from '../../actions/types';

let action;
beforeAll(() => {
    action = {
        type: GET_COIN_MARKET_PRICES,
        payload: [ { price: 'Price 1' }, { price: 'Price 2' }, { price: 'Price 3' }]
    };
});

it('has the correct payload size', () => {
    const newState = coinsmarket([], action);
    expect(newState.prices.length).toEqual(3);
});

it('checks if the loading variable set finish status and save payloads', () => {
    const newState = coinsmarket([], action);
    expect(newState.loading).toEqual(false);
    expect(newState.prices.length).toEqual(3);
});


it('handles action of type GET_COIN_MARKET_PRICES', () => {
    const newState = coinsmarket([], action);
    expect(newState.prices[0].price).toEqual('Price 1');
});