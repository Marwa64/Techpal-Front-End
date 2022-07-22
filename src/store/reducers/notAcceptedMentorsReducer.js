import { SET_NOT_ACCEPTED_MENTORS } from '../actions/types'

const notAcceptedMentorsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_NOT_ACCEPTED_MENTORS:
      return action.data
    default:
      return state
  }
}

export default notAcceptedMentorsReducer
