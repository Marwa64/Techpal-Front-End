import { SET_ENROLLED_COURSES } from '../actions/types'

const enrolledCoursesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ENROLLED_COURSES:
      return action.data
    default:
      return state
  }
}

export default enrolledCoursesReducer
