import { SET_TRACKS, ADD_TRACK } from '../actions/types'

const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRACKS:
      return action.data
    case ADD_TRACK:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}

export default tracksReducer
