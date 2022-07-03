import { SET_PROFILES, REMOVE_PROFILE } from '../actions/types'

const profilesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PROFILES:
      return action.data
    case REMOVE_PROFILE:
      return state.filter(profile => profile.ID !== action.data)
    default:
      return state
  }
}

export default profilesReducer
