import { SET_PROFILES } from "../actions/types";

const profilesReducer = (state = [], action) => {
  switch(action.type) {
    case SET_PROFILES:
      return action.data
    default:
        return state
  }
}

export default profilesReducer;