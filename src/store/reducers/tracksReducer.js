import { SET_TRACKS } from '../actions/types'

const tracksReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TRACKS:
      return action.data
    default:
      return state
  }
}

export default tracksReducer
