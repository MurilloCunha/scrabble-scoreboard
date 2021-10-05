import React from 'react'
import ScoreInput from '../score-input/score-input'

interface Player {
  id: number,
  name: string,
  score: number[],
  totalScore: number,
}
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
