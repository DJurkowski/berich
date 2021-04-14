import details from '../details';
import { GET_COIN_DETAILS } from '../../actions/types';

let action;
beforeAll(() => {
    action = {
        type: GET_COIN_DETAILS,
        payload: { name: 'Detail 1', id: '1', desc:'Description', price: 'Detail price' }
    };
});

it('handles action of type GET_COIN_DETAILS', () => {
    const newState = details([], action);
    expect(newState).toEqual({
        loading: false,
        details: {
            name: 'Detail 1', 
            id: '1', 
            desc:'Description',
            price: 'Detail price'
        }
    });
});

it('checks if the loading variable set finish status and save payloads', () => {
    const newState = details([], action);
    expect(newState.loading).toEqual(false);
    expect(newState.details.id).toEqual('1');
});
