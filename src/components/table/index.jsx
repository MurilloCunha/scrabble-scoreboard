import React, { useCallback, useState } from 'react'
import ScoreInput from '../score-input'

function Table({ playersList }) {
  const [scoreRowCount, setScoreRowCount] = useState([0])

  const handleScoreChange = useCallback((event,player) => {
    const { value } = event.target

    player.addScore(Number(value))

    const scoreRowsArray = [...player.score.map((score,index) => index)]
    const playersScoreLength = playersList.map(player => player.score.length)
    const sameScoreAmmount = playersScoreLength.every(val => val === playersScoreLength[0])

    sameScoreAmmount ? setScoreRowCount([...scoreRowCount,scoreRowCount.length]) : setScoreRowCount(scoreRowsArray)
  }, [playersList, scoreRowCount])

  return (
    <table className="scoreboard__table">
      <thead>
        <tr>
          {playersList.map(player => <th key={`header_${player.name}`}><span>{player.name}</span></th>)}
        </tr>
      </thead>
      <tbody>
        {scoreRowCount.map((scoreRow) =>
          <tr>
            {playersList.map(player =>
            <td key={`${player.name}_${scoreRow}`}>
              {
                player.score[scoreRow] ? player.score[scoreRow] : <ScoreInput onBlur={(event) => handleScoreChange(event,player)} />
              }
            </td>)}
          </tr>
        )}
        <tr>
          {playersList.map(player => <td key={`total_${player.name}`} className="scoreboard__table-total">{player.totalScore}</td>)}
        </tr>
      </tbody>
    </table>

  )
}

export default Table
