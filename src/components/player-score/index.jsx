import React from 'react'
import ScoreInput from '../score-input'

function PlayerScore({player, onScoreChange}) {

  return (
    <div className="playerScore-wrapper">
      <h2>{player.name}</h2>
      <div className="playerScore__score-area">
        {player.score.map(item => <p>{item}</p>)}
        <ScoreInput onKeyDown={(evt) => onScoreChange(evt,player)} />
      </div>
      <p>{player.totalScore}</p>
    </div>
  )
}

export default PlayerScore
