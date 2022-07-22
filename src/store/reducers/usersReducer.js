import { SET_USERS } from '../actions/types'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.data
    default:
      return state
  }
}

export default usersReducer
