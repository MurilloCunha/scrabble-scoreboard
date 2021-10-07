import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../views/home/home'
import PlayersSetup from '../views/players-setup/players-setup'
import Scoreboard from '../views/scoreboard/scoreboard'
import Error404 from '../views/error404'

export enum ROUTES {
  HOME = '/',
  PLAYERS_SETUP = '/players-setup',
  SCOREBOARD = '/scoreboard',
  NOT_FOUND = '/not-found'
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.PLAYERS_SETUP} component={PlayersSetup} />
        <Route path={ROUTES.SCOREBOARD} component={Scoreboard} />
        <Route render={Error404} />
      </Switch>
    </BrowserRouter>

  )
}

export default Routes
