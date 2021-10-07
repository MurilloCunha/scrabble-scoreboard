import { useHistory, useLocation } from "react-router"
import { ROUTES } from "../routes"

function UseNavigation() {
  const history = useHistory()
  const location = useLocation()

  const next = (): void => {
    switch (location.pathname) {
      case ROUTES.HOME:
        history.push(ROUTES.PLAYERS_SETUP)
        break;
      case ROUTES.PLAYERS_SETUP:
        history.push(ROUTES.SCOREBOARD)
        break;
      case ROUTES.SCOREBOARD:
        history.push(ROUTES.HOME)
        break;
      default:
        history.push(ROUTES.NOT_FOUND)
        break;
    }
  }

  const previous = (): void => {
    switch (location.pathname) {
      case ROUTES.HOME:
        history.push(ROUTES.HOME)
        break;
      case ROUTES.PLAYERS_SETUP:
        history.push(ROUTES.HOME)
        break;
      case ROUTES.SCOREBOARD:
        history.push(ROUTES.PLAYERS_SETUP)
        break;
      default:
        history.push(ROUTES.NOT_FOUND)
        break;
    }
  }

  const home = (): void => {
    history.push(ROUTES.HOME)
  }
  return { next, previous, home }
}

export default UseNavigation
