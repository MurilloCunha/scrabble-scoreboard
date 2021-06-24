import React from 'react'
import { Link } from 'react-router-dom'

import PlayerInput from '../../components/player-input/'
import Button from '../../components/button/'

function PlayersSteup({playersList}) {
    return (
        <section className="players-setup">
            {playersList.map(player => <PlayerInput player={player}/>)}
            <Button variant="ghost">+</Button>
            <Link to="/scoreboard">
                <Button>Começar</Button>
            </Link>
        </section>
    )
}

export default PlayersSteup
