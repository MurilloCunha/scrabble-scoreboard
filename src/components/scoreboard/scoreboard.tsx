import React from "react"
import { GameHook } from "../../interfaces"
import ScoreBoardColumn from "./scoreboard-column/scoreboard-column"
import "./scoreboard.style.scss"

interface Props {
  game: GameHook
}

function Scoreboard(props: Props): JSX.Element {
	const { game } = props
	return (
		<div className="scoreboard" data-testid="scoreboard">
			{game.state.players.map(player => (
				<ScoreBoardColumn key={player.id} player={player} game={game} />
			))}
		</div>
	)
}

export default Scoreboard
