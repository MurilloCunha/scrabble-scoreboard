import React from 'react'
import ScoreInput from '../score-input'

function Table({ playersList }) {
  return (
    <table class="scoreboard__table">
      <thead>
        <tr>
          {playersList.map(player => <th>{player.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {playersList[0].score.map((scoreRow, scoreRowIndex) =>
          <tr>{playersList.map(player => <td>{player.score[scoreRowIndex] || <ScoreInput player />}</td>)}</tr>
        )}
        <tr>
          {playersList.map(player => <td>{<ScoreInput player={player} />}</td>)}
        </tr>
        <tr>
          {playersList.map(player => <td class="scoreboard__table-total">{player.totalScore}</td>)}
        </tr>
      </tbody>
    </table>

  )
}

export default Table
