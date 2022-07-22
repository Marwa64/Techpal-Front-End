import { SET_ACCEPTED_MENTORS, ADD_ACCEPTED_MENTOR } from '../actions/types'

const acceptedMentorsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ACCEPTED_MENTORS:
      return action.data
    case ADD_ACCEPTED_MENTOR:
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}

export default acceptedMentorsReducer
