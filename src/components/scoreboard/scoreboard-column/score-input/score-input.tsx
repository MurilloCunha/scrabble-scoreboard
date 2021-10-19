import React from "react"
import { GameHook, Player } from "../../../../interfaces"
import NumberInput from "../../../number-input/number-input"

interface Props {
  player: Player
  game: GameHook
}

function Scoreinput(props: Props): JSX.Element {
	const { player, game } = props

	const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>): void => {
		const { value } = event.currentTarget
		event.currentTarget.checkValidity() && game.addScore(player.id, Number(value))
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		const { key, currentTarget } = event

		if (key === "Enter" && currentTarget.checkValidity()) {
			game.addScore(player.id, Number(currentTarget.value))
		}
	}

	return <NumberInput onBlur={handleBlur} onKeyDown={handleKeyDown} data-testid="score-input-hoc"/>

}

export default Scoreinput
