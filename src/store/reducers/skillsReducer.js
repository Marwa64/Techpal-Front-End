import { SET_SKILLS } from '../actions/types'

const skillsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SKILLS:
      return action.data
    default:
      return state
  }
}

export default skillsReducer
