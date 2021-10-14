import React from 'react'
import { GameHook, Player } from '../../../interfaces'
import ScoreInput from './score-input/score-input'
import ScoreList from './score-list/score-list'
import './scoreboard-column.style.scss'

interface Props {
  player: Player
  game: GameHook
}

function ScoreBoardColumn(props: Props) {
  const { player, game } = props

  return (
    <div className="scoreboard-column" data-testid='column'>
      <h3 className="scoreboard-column__player">{player.name}</h3>
      <ScoreList player={player} game={game} />
      <ScoreInput player={player} game={game} />
      <p className="scoreboard-column__total">{player.totalScore}</p>
    </div>
  )
}

export default ScoreBoardColumn
