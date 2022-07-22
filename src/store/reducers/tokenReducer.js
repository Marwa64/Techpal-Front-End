import { SET_TOKEN, REMOVE_TOKEN } from '../actions/types'

const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.data
    case REMOVE_TOKEN:
      return ''
    default:
      return state
  }
}

export default tokenReducer
