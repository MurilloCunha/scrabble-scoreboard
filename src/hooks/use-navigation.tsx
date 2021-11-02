import { useHistory, useLocation } from "react-router"
import { navigationHook } from "../interfaces"
import { ROUTES } from "../views/routes"

function useNavigation(): navigationHook {
	const history = useHistory()
	const location = useLocation()

	const next = (): void => {
		switch (location.pathname) {
		case ROUTES.HOME:
			history.push(ROUTES.PLAYERS_SETUP)
			break
		case ROUTES.PLAYERS_SETUP:
			history.push(ROUTES.SCOREBOARD)
			break
		case ROUTES.SCOREBOARD:
			history.push(ROUTES.STATISTICS)
			break
		case ROUTES.STATISTICS:
			history.push(ROUTES.PLAYERS_SETUP)
			break
		default:
			history.push(ROUTES.NOT_FOUND)
			break
		}
	}

	const previous = (): void => {
		switch (location.pathname) {
		case ROUTES.HOME:
			history.push(ROUTES.HOME)
			break
		case ROUTES.PLAYERS_SETUP:
			history.push(ROUTES.HOME)
			break
		case ROUTES.SCOREBOARD:
			history.push(ROUTES.PLAYERS_SETUP)
			break
		case ROUTES.STATISTICS:
			history.push(ROUTES.SCOREBOARD)
			break
		default:
			history.push(ROUTES.NOT_FOUND)
			break
		}
	}

	const home = (): void => {
		history.push(ROUTES.HOME)
	}
	return { next, previous, home }
}

export default useNavigation
