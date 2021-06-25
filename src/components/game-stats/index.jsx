import React, { useContext } from 'react'
import Match from '../../context/status'

function GameStats(props) {
  const MatchPlayers = useContext(Match)

  const winner = MatchPlayers.all.reduce((compare,player) =>
   compare.totalScore > player.totalScore ? compare : player
  )

  const playerhigherScore = MatchPlayers.all.reduce((compare,player) => 
    Math.max(compare.score) > Math.max(player.score) ? compare : player
    )
  const higherScore = {
    score:Math.max(...playerhigherScore.score),
    player:playerhigherScore.name
  }
 
  const playerLowerScore = MatchPlayers.all.reduce((compare,player) => 
    Math.min(...player.score) > Math.min(compare.score)  ? player : compare
  )
  const lowerScore = {
    score:Math.min(...playerLowerScore.score),
    player:playerLowerScore.name
  }

  console.log(playerLowerScore)
  return (
    <section className="game-stats">
      <article className="game-stats__winner">
        <h2 className="logo__title">
              <span className="logo__title--tile">V</span>
              <span className="logo__title--tile">E</span>
              <span className="logo__title--tile">N</span>
              <span className="logo__title--tile">C</span>
              <span className="logo__title--tile">E</span>
              <span className="logo__title--tile">D</span>
              <span className="logo__title--tile">O</span>
              <span className="logo__title--tile">R</span>
              <span className="logo__title--tile">(A)</span>
          </h2>
        <h3>{winner.name}</h3>
      </article>
      <article className="game-stats__stats"> 
        <ul>
         <li>Maior pontuação: {higherScore.score}({higherScore.player})</li> 
         <li>Menor pontuação: {lowerScore.score}({lowerScore.player})</li>
         <li>Tempo de jogo: {props.time}</li> 
        </ul>
      </article>
    </section>
  )
}

export default GameStats
