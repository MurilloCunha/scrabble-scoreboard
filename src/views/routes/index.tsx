import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "../home/home"
import PlayersSetup from "../players-setup/players-setup"
import ScoreboardView from "../scoreboard/scoreboard-view"
import Error404 from "../error/error404"
import useGame from "../../hooks/use-game"
import Statistics from "../statistics/game-stats"

export enum ROUTES {
  HOME = "/",
  PLAYERS_SETUP = "/players-setup",
  SCOREBOARD = "/scoreboard",
  STATISTICS = "/statistics",
  NOT_FOUND = "/not-found"
}

function Routes(): JSX.Element {
	const game = useGame()

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={ROUTES.HOME} component={Home} />
				<Route path={ROUTES.PLAYERS_SETUP} component={() => PlayersSetup(game)} />
				<Route path={ROUTES.SCOREBOARD} component={() => ScoreboardView(game)} />
				<Route path={ROUTES.STATISTICS} component={() => Statistics(game)} />
				<Route render={Error404} />
			</Switch>
		</BrowserRouter>

	)
}

export default Routes
