import allReducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composedEnhancer = applyMiddleware(thunk);

const store = createStore(allReducers, composedEnhancer);

export default store;