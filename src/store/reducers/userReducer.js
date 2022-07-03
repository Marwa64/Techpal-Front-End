import { SET_USER } from '../actions/types'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data
    default:
      return state
  }
}

export default userReducer
