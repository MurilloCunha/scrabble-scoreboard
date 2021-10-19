import React, { useCallback, useState } from "react"
import Button from "../../components/button/button"
import TextInput from "../../components/text-input/text-input"
import useNavigation from "../../hooks/use-navigation"
import { GameHook } from "../../interfaces"
import { getFormData, hasErrors, registerPlayers } from "../../utils/submit-helpers"

import "./players-setup.style.scss"

function PlayersSteup(game: GameHook): JSX.Element {
	const navigation = useNavigation()
	const [error, setError] = useState("")
	const [playerInputs, setPlayerInputs] = useState([1,2])

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = getFormData(event.currentTarget,["Jogador"])
		const activeError = hasErrors(formData.Jogador)
    
		if(activeError){
			setError(activeError)
			return
		}
    
		game.startMatch()
		registerPlayers(formData.Jogador, game)

		navigation.next()
	}

	const handleNewPlayer = useCallback((event:React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		event.preventDefault()
		if(playerInputs.length <4){
			setPlayerInputs([...playerInputs, playerInputs.length + 1])
		}
	},[playerInputs])

	return (
		<>
			<header>
				<h1>Adicione os jogadores:</h1>
				<p>(2 a 4 jogadores)</p>
			</header>
			<main>
				<form className="player-form" onSubmit={handleSubmit}>
					{playerInputs.map( playerInput => 
						<TextInput key={playerInput} label={`Jogador(a) ${playerInput}`} name="Jogador"  />
					)}
					<p className="player-form__error">{error}</p>
					<div className="player-form__buttons">
						<Button variant="primary" type="submit">Iniciar</Button>
						{playerInputs.length < 4 && <Button variant="ghost" onClick={handleNewPlayer}>novo jogador(a)</Button>}
					</div>
				</form>
			</main>
			<footer></footer>
		</>
	)
}

export default PlayersSteup
