import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../home/home'
import PlayersSetup from '../players-setup/players-setup'
import Scoreboard from '../scoreboard/scoreboard'
import Error404 from '../error404'
import useGame from '../../hooks/use-game'

export enum ROUTES {
  HOME = '/',
  PLAYERS_SETUP = '/players-setup',
  SCOREBOARD = '/scoreboard',
  NOT_FOUND = '/not-found'
}

function Routes() {
  const game = useGame()

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.PLAYERS_SETUP} component={() => PlayersSetup(game)} />
        <Route path={ROUTES.SCOREBOARD} component={() => Scoreboard(game)} />
        <Route render={Error404} />
      </Switch>
    </BrowserRouter>

  )
}

export default Routes
