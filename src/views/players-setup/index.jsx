import React from 'react'
import PlayerInput from '../../components/player-input/'
import Button from '../../components/button/'

function PlayersSteup({playersList}) {
    return (
        <section className="players-setup">
            {playersList.map(player => <PlayerInput player={player}/>)}
            <Button variant="ghost">+</Button>
            <Button>Começar</Button>
        </section>
    )
}

export default PlayersSteup
