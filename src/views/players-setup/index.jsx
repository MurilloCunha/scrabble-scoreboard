import React from 'react'
import { Link } from 'react-router-dom'

import Match from '../../context/status'
import PlayerInput from '../../components/player-input/'
import Button from '../../components/button/'

function PlayersSteup() {
  return (
    <Match.Consumer>
      {(matchPlayers) => (
        <section className="players-setup">
          {matchPlayers.all.map(player => <PlayerInput player={player} />)}
          <Button variant="ghost">+</Button>
          <Link to="/scoreboard">
            <Button>Começar</Button>
          </Link>
        </section>
      )}
    </Match.Consumer>
  )
}

export default PlayersSteup
