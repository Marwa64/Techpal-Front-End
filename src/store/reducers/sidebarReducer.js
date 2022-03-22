import { TOGGLE_SIDEBAR } from "../actions/types";

const sidebarReducer = (state = true, action) => {
  switch(action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
      default:
        return state;
  }
}

export default sidebarReducer;