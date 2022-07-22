import { SET_LEADERBOARD } from '../actions/types'

const leaderboardReducer = (state = [], action) => {
  switch (action.type) {
    case SET_LEADERBOARD:
      return action.data
    default:
      return state
  }
}

export default leaderboardReducer
