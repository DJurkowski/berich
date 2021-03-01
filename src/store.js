import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

export const middlware = [thunk];

export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlware))(createStore);

export const store = createStoreWithMiddleware(rootReducer, initialState);