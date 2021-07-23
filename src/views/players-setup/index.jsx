import React, { useCallback, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Match from '../../context/status'
import MatchDuration from '../../context/duration'
import PlayerInput from '../../components/player-input/'
import Button from '../../components/button/'
import InfoContainer from '../../components/info-container'

function PlayersSteup() {
  const [playersCount,setPlayersCount] = useState(0)
  const matchPlayers = useContext(Match)
  const matchTimer = useContext(MatchDuration)
  const location = useHistory()

  const handleAddPlayer = useCallback(() => {
    playersCount < 4 && matchPlayers.add({ id: matchPlayers.all.length + 1, name: '' })
    setPlayersCount(matchPlayers.all.length)
  }, [matchPlayers, playersCount])

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log('a')
    matchTimer.setStartTime()
    location.push("/scoreboard")
  }
  return (
    <main className="players-setup">
      <form onSubmit={handleSubmit}>
        <InfoContainer>
        {matchPlayers.all.map(player =>
            <PlayerInput key={player.id} player={player} />
          )}
          {matchPlayers.all.length < 4 && <Button type="button" variant="ghost" onClick={handleAddPlayer}>adicionar jogador(a)</Button>}
        </InfoContainer>
            <Button type="submit"  >Começar</Button>
      </form>
    </main>
  )
}

export default PlayersSteup
