import { GameHook } from "../interfaces"

export const getFormData = (formElement: HTMLFormElement, names: string[]): { [key: string]: string[] } => {
	const formData = new FormData(formElement)
	const formValues = names.reduce((values, name) =>
		({ ...values, [name]: formData.getAll(name) }), {}
	)
	return formValues
}

export const hasRepeatedValues = (input: string[]): boolean => {
	const inputSet = new Set(input)

	return inputSet.size === input.length ? false : true
}

export const hasEmptyValues = (input: string[]): boolean => {
	const inputSet = new Set(input)

	return inputSet.has("")
}

export const hasErrors = (input: string[]): string => {

	if (hasEmptyValues(input)) {
		return "Todos os jogadores devem ter nomes."

	}
	if (hasRepeatedValues(input)) {
		return "Não podem existir dois jogadores com o mesmo nome."

	}
	return ""
}

export const registerPlayers = (players: string[], game: GameHook): void => {
	players.forEach(player => game.addPlayer(player))
}