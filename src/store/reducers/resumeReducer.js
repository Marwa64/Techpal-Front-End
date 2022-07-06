import { SET_RESUME } from '../actions/types'

const resumeReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RESUME:
      return action.data
    default:
      return state
  }
}

export default resumeReducer
