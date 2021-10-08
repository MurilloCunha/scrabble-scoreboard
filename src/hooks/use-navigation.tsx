import { useEffect } from "react"
import { useHistory, useLocation } from "react-router"
import { ROUTES } from "../views/routes"
import useGame from "./use-game"

function useNavigation() {
  const history = useHistory()
  const location = useLocation()
  const game = useGame()

  useEffect(() => {
    if(location.pathname === ROUTES.SCOREBOARD && game.state.players.length === 0){
      history.push('/')
    }
  }, [game.state.players.length, history, location.pathname])
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

export default useNavigation
