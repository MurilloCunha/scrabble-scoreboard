import React from 'react'
import ScoreInput from '../score-input'

function Table({ playersList }) {
  return (
    <table className="scoreboard__table">
      <thead>
        <tr>
          {playersList.map(player => <th key={`header_${player.name}`}>{player.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {playersList[0].score.map((scoreRow, scoreRowIndex) =>
          <tr>{playersList.map(player => <td key={`${player.name}_${scoreRowIndex}`}>{player.score[scoreRowIndex] || <ScoreInput player />}</td>)}</tr>
        )}
        <tr>
          {playersList.map(player => <td key={`scoreInput_${player.name}`}>{<ScoreInput player={player} />}</td>)}
        </tr>
        <tr>
          {playersList.map(player => <td key={`total_${player.name}`} className="scoreboard__table-total">{player.totalScore}</td>)}
        </tr>
      </tbody>
    </table>

  )
}

export default Table
