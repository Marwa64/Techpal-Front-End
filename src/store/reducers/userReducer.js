import { SIGN_UP, LOGIN } from "../actions/types";

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case SIGN_UP:
        return action.data
    default:
        return state
  }
}

export default userReducer;