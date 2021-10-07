import { useReducer } from 'react'
import { GameState } from '../interfaces'
import reducer from '../modules/game/reducer'

const initialState: GameState = {
  players: [],
  stats: {
    winner: '',
    higherScore: {
      score: 0,
      player: ''
    },
    lowerScore: {
      score: 0,
      player: ''
    },
    gameDuration: 0
  }
}


function UseGame() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addPlayer = (playerName: string): void => {
    dispatch({ type: 'ADD_PLAYER', name: playerName })
  }

  const addScore = (playerId: number, playerScore: number): void => {
    dispatch({ type: 'ADD_SCORE', id: playerId, score: playerScore })
  }

  const deleteScore = (playerId: number, scoreIndex: number): void =>{
    dispatch({type:'DELETE_SCORE', id: playerId, scoreIndex})
  }

  const startMatch = () : void => {
    dispatch({type: 'START_MATCH'})
  }
  
  const endMatch = () : void => {
    dispatch({type: 'END_MATCH'})
  }
  return {addPlayer, addScore, deleteScore, startMatch, endMatch, state}
}

export default UseGame
