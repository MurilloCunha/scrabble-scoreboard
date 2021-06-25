import React, { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import Match from '../../context/status'
import MatchDuration from '../../context/duration'
import PlayerInput from '../../components/player-input/'
import Button from '../../components/button/'

function PlayersSteup() {
  const [playersCount,setPlayersCount] = useState(0)
  const matchPlayers = useContext(Match)
  const matchTimer = useContext(MatchDuration)

  const handleAddPlayer = useCallback(() => {
    playersCount < 4 && matchPlayers.add({ id: matchPlayers.all.length + 1, name: '' })
    setPlayersCount(matchPlayers.all.length)
  }, [matchPlayers, playersCount])

  return (
    <section className="players-setup">
      {matchPlayers.all.map(player =>
        <PlayerInput key={player.id} player={player} />
      )}
      {matchPlayers.all.length < 4 && <Button variant="ghost" onClick={handleAddPlayer}>+</Button>}
      <Link to="/scoreboard">
        <Button onClick={() => matchTimer.setStartTime()}>Começar</Button>
      </Link>
    </section>
  )
}

export default PlayersSteup
