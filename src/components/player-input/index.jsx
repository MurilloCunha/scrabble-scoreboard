import React from 'react'

function PlayerInput({ player }) {
  const playerInputHandler = (event) => {
    const { value } = event.target
    player.setName(value)
  }
  return (
    <div className="player-input">
      <label htmlFor={`player${player.id}`}>Jogador(a) {player.id}:</label>
      <input
        type="text"
        placeholder="digite o nome do jogador(a)"
        defaultValue={player.name}
        onChange={playerInputHandler}
        />
    </div>
  )
}

export default PlayerInput
