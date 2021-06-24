import React from 'react'
import ScoreInput from '../score-input'

function Scoreboard({ players }) {
  return (
    <table class="scoreboard__table">
      <thead>
        <tr>
          {players.map(player => <th>{player.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {players[0].score.map((scoreRow, scoreRowIndex) =>
          <tr>{players.map(player => <td>{player.score[scoreRowIndex] || <ScoreInput player />}</td>)}</tr>
        )}
        <tr>
          {players.map(player => <td>{<ScoreInput player={player} />}</td>)}
        </tr>
        <tr>
          {players.map(player => <td class="scoreboard__table-total">{player.totalScore}</td>)}
        </tr>
      </tbody>
    </table>

  )
}

export default Scoreboard
