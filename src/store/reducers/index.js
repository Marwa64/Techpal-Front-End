import { combineReducers } from 'redux';
import sidebarReducer from './sidebarReducer';
import darkmodeReducer from './darkmodeReducer';

const allReducers = combineReducers({
    sidebar: sidebarReducer,
    darkmode: darkmodeReducer
})

export default allReducers;