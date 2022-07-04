import { SET_NEWS } from '../actions/types'

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_NEWS:
      return action.data
    default:
      return state
  }
}

export default newsReducer
