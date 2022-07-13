import { SET_SESSIONS, ADD_SESSION, REMOVE_SESSION } from '../actions/types'

const sessionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SESSIONS:
      return action.data
    case ADD_SESSION:
      return [
        ...state,
        action.data
      ]
    case REMOVE_SESSION:
      return state.filter(session => session.ID !== action.data)
    default:
      return state
  }
}

export default sessionsReducer
