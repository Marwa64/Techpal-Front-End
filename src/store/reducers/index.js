import { combineReducers } from 'redux';
import sidebarReducer from './sidebarReducer';
import darkmodeReducer from './darkmodeReducer';
import userReducer from './userReducer';
import tokenReducer from './tokenReducer';
import tracksReducer from './tracksReducer';
import currentProfileReducer from './currentProfileReducer';
import currentTrackReducer from './currentTrackReducer';

const allReducers = combineReducers({
    sidebar: sidebarReducer,
    darkmode: darkmodeReducer,
    user: userReducer,
    token: tokenReducer,
    tracks: tracksReducer,
    currentProfile: currentProfileReducer,
    currentTrack: currentTrackReducer
})

export default allReducers;