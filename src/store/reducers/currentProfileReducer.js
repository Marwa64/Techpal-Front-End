import { SET_CURRENT_PROFILE } from '../actions/types'

const currentProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_PROFILE:
      return action.data
    default:
      return state
  }
}

export default currentProfileReducer
