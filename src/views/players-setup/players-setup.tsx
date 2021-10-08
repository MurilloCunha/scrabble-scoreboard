import React, { useState } from "react";
import useNavigation from "../../hooks/use-navigation";
import { GameHook } from "../../interfaces";



function PlayersSteup(game: GameHook) {
  const navigation = useNavigation()
  const [error, setError] = useState("")

  const INPUT_PATTERN = {
    pattern: `^[a-zA-Z0-9]*$`,
    maxLength: 10
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const players = formData.getAll('Jogador')
    const verifyiedPlayers = new Set(players)

    if (players.length !== verifyiedPlayers.size) {
      setError("Não podem existir dois jogadores com o mesmo nome")
      return
    }

    players.forEach(player => {
      game.addPlayer(player as string)
    })
    
    game.startMatch()
    navigation.next()
    
  }

  return (
    <section>
      <h1>Adicione os jogadores:</h1>
      <p>(2 a 4 jogadores)</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Jogador 1">Jogador 1</label>
        <input type="text" name="Jogador" id="Jogador 1" placeholder='Jogador 1' {...INPUT_PATTERN} />

        <label htmlFor="Jogador 2">Jogador 2</label>
        <input type="text" name="Jogador" id="Jogador 2" placeholder='Jogador 2' {...INPUT_PATTERN} />

        <label htmlFor="Jogador 3">Jogador 3</label>
        <input type="text" name="Jogador" id="Jogador 3" placeholder='Jogador 3' {...INPUT_PATTERN} />

        <label htmlFor="Jogador 4">Jogador 4</label>
        <input type="text" name="Jogador" id="Jogador 4" placeholder='Jogador 4' {...INPUT_PATTERN} />

        {error && <p>{error}</p>}
        <button type="submit">Iniciar</button>
      </form>
    </section>
  );
}

export default PlayersSteup
