import React, { useCallback, useState } from 'react'
import { isValidNameInput } from '../../utils/input-helpers'

function PlayerInput({ player }) {
  const [error, setError] = useState(undefined)

  const playerInputHandler = useCallback((event) => {
    const { value } = event.target
    setError(isValidNameInput(value))
    player.setName(value)
  }, [player])
  return (
    <div className="player-input">
      <label htmlFor={`player${player.id}`}>Jogador(a) {player.id}:</label>
      <input
        type="text"
        placeholder="digite o nome do jogador(a)"
        defaultValue={player.name}
        onChange={playerInputHandler}
        className={error && 'player-input__error'}
        required
        />
        {error && <p className="player-input__error-message">{error}</p>}
    </div>
  )
}

export default PlayerInput
