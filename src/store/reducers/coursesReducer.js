import { SET_COURSES } from '../actions/types'

const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COURSES:
      return action.data
    default:
      return state
  }
}

export default coursesReducer
