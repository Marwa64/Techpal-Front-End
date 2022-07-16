import { SET_COMPLETED_COURSES } from '../actions/types'

const completedCoursesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETED_COURSES:
      return action.data
    default:
      return state
  }
}

export default completedCoursesReducer
