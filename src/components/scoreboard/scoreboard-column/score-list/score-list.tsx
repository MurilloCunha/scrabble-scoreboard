import React, { useState } from 'react'
import { GameHook, Player } from '../../../../interfaces'
import Button from '../../../button/button'
import './score-list.style.scss'

interface Props {
  player: Player
  game: GameHook
}

function ScoreList(props: Props) {
  const [inputOptions, setInputOptions] = useState({index: 0, show:false})
  const { player, game } = props

  const handleOptions = (index: number): void =>{
    setInputOptions({ index, show:!inputOptions.show})
  }

  const handleDeleteScore = (index:number) => {
    game.deleteScore(player.id, index)
  }

  return (
      <ul className="score-list">
        {player.score.map((score, index) => (
          <li className="score-list__score" onClick={() => handleOptions(index)} key={`${player.id}_score${index}`}>
            {score}
            {inputOptions.index === index && inputOptions.show &&
             <Button onClick={() => handleDeleteScore(index)} variant="delete">X</Button>
            }
          </li>
        ))}
      </ul>
  )
}

export default ScoreList
