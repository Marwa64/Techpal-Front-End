import { SET_CURRENT_TRACK } from '../actions/types'

const currentTrackReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return action.data
    default:
      return state
  }
}

export default currentTrackReducer
