import React, { useCallback, useState } from 'react'
// import { isValidNameInput } from '../../utils/input-helpers'

interface Player {
  id: number,
  name: string,
  score: number[]
}

interface PlayerInputProps {
  player : Player
}

function PlayerInput({ player }: PlayerInputProps) {
  const [error, setError] = useState(undefined)

  const playerInputHandler = useCallback((event) => {
    const { value } = event.target
    // refazer função de validação de nome
    //setError(isValidNameInput(value))
    player.name = value
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
