import { SET_TRACKS, ADD_TRACK, REMOVE_TRACK } from '../actions/types'

const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRACKS:
      return action.data
    case ADD_TRACK:
      return [
        ...state,
        action.data
      ]
    case REMOVE_TRACK:
      return state.filter(track => track.ID !== action.data)
    default:
      return state
  }
}

export default tracksReducer
