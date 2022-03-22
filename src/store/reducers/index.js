import { combineReducers } from 'redux';
import sidebarReducer from './sidebarReducer';

const allReducers = combineReducers({
    sidebar: sidebarReducer
})

export default allReducers;