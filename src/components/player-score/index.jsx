import React from 'react'
import ScoreEditMenu from '../score-edit-menu'
import ScoreInput from '../score-input'

function PlayerScore({player, onScoreChange, edit}) {
  

  return (
    <div className="playerScore-wrapper">
      <h2>{player.name}</h2>
      <div className="playerScore__score-area" >
        {player.score.map(item => 
          <ScoreEditMenu edit={edit} score={item} player={player}/>
        )}
        <ScoreInput onKeyDown={(evt) => onScoreChange(evt,player)} />
      </div>
      <p>{player.totalScore}</p>
    </div>
  )
}

export default PlayerScore
