import { DISPLAY_MESSAGE, REMOVE_MESSAGE } from '../actions/types'

const messageReducer = (state = { }, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return action.data
    case REMOVE_MESSAGE:
      return ''
    default:
      return state
  }
}

export default messageReducer
