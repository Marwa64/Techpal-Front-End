import { SET_JOBS } from '../actions/types'

const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_JOBS:
      return action.data
    default:
      return state
  }
}

export default jobsReducer
