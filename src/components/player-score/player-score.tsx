import React from 'react'
import { Player } from '../../interfaces'
import ScoreInput from '../score-input/score-input'

interface PlayerScore {
  player: Player,
  onScoreChange: Function,

}

function PlayerScore({player, onScoreChange}: PlayerScore) {
  
  return (
    <div className="playerScore-wrapper">
      <h2>{player.name}</h2>
      <div className="playerScore__score-area" >
        <ScoreInput />
      </div>
      <p>{player.totalScore}</p>
    </div>
  )
}

export default PlayerScore
