import React from "react"
import Button from "../../components/button/button"
import useNavigation from "../../hooks/use-navigation"
import { GameHook } from "../../interfaces"
import { secondsToTime } from "../../utils/date-utils"

import "./statistics.styles.scss"

function Statistics(props: GameHook): JSX.Element {
	const { state: { stats: { winner, higherScore, lowerScore, gameDuration } } } = props
	const navigation = useNavigation()

	const handleNewGame = (): void =>{
		navigation.next()
	}
	const handleEndGame = (): void =>{
		navigation.home()
	}

	return (
		<>
			<header>
				<h1>Vencedor(a)</h1>
			</header>
			<main>
				<svg xmlns="http://www.w3.org/2000/svg" width="120" fill="#ffd808" height="120" viewBox="0 0 24 24"><path d="M5 0c0 9.803 5.105 12.053 5.604 16h2.805c.497-3.947 5.591-6.197 5.591-16h-14zm7.006 14.62c-.408-.998-.969-1.959-1.548-2.953-1.422-2.438-3.011-5.162-3.379-9.667h9.842c-.368 4.506-1.953 7.23-3.372 9.669-.577.993-1.136 1.954-1.543 2.951zm-.006-3.073c-1.125-2.563-1.849-5.599-1.857-8.547h-1.383c.374 3.118 1.857 7.023 3.24 8.547zm12-9.547c-.372 4.105-2.808 8.091-6.873 9.438.297-.552.596-1.145.882-1.783 2.915-1.521 4.037-4.25 4.464-6.251h-2.688c.059-.45.103-.922.139-1.405h4.076zm-24 0c.372 4.105 2.808 8.091 6.873 9.438-.297-.552-.596-1.145-.882-1.783-2.915-1.521-4.037-4.25-4.464-6.251h2.688c-.058-.449-.102-.922-.138-1.404h-4.077zm13.438 15h-2.866c-.202 1.187-1.63 2.619-3.571 2.619v4.381h10v-4.381c-1.999 0-3.371-1.432-3.563-2.619zm2.562 6h-8v-2h8v2z" /></svg>
				<h2>{winner}</h2>
				<ul className="statistics">
					<li>Maior pontuação: {higherScore.score}({higherScore.player})</li>
					<li>Menor pontuação: {lowerScore.score}({lowerScore.player})</li>
					<li>Tempo de jogo: {secondsToTime(gameDuration)}</li>
				</ul>
				<div className="statistics__buttons">
					<Button variant="primary" onClick={handleNewGame}>Novo jogo?</Button>
					<Button variant="ghost" onClick={handleEndGame}>Finalizar</Button>
				</div>
			</main>
			<footer></footer>
		</>
	)
}

export default Statistics
