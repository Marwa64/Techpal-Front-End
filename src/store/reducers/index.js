import { combineReducers } from 'redux';
import sidebarReducer from './sidebarReducer';
import darkmodeReducer from './darkmodeReducer';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';

const allReducers = combineReducers({
    sidebar: sidebarReducer,
    darkmode: darkmodeReducer,
    user: userReducer,
    token: tokenReducer
})

export default allReducers;