import React from 'react'

function PlayerInput({player}) {
    return (
    <div class="player-input">
        <label for={`player${player.id}`}>Jogador(a) {player.id}:</label>
        <input type="text" placeholder="digite o nome do jogador(a)" defaultValue={player.name} />
    </div>   
    )
}

export default PlayerInput
