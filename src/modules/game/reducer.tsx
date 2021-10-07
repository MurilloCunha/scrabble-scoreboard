import { GameState } from "../../interfaces"
import { ACTIONS } from "./actions"
import { addPlayerToList, addScoreToPlayer, computeGameStats, deleteScoreFromPlayer } from "./helpers"

const reducer = (state: GameState, action: ACTIONS): GameState => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: addPlayerToList(state.players, action.name)
      }
    case 'ADD_SCORE':
      return {
        ...state,
        players: addScoreToPlayer(state.players, action.score, action.id)
      }
    case 'DELETE_SCORE':
      return {
        ...state,
        players: deleteScoreFromPlayer(state.players, action.scoreIndex, action.id)
      }
    case 'END_MATCH':
      return {
        ...state,
        stats: computeGameStats(state.players, state.stats)
      }
    case 'START_MATCH':
      return {
        ...state,
        stats: {
          ...state.stats,
          gameDuration: new Date().getTime()
        }
      }
    default:
      return state;
  }
}

export default reducer