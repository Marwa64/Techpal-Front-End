import { TOGGLE_MODE } from "../actions/types";

const darkmodeReducer = (state = false, action) => {
  switch(action.type) {
    case TOGGLE_MODE:
      return !state;
      default:
        return state;
  }
}

export default darkmodeReducer;