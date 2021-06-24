import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../views/home/'
import PlayersSetup from '../views/players-setup/'
import Scoreboard from '../views/scoreboard/'
import Error404 from '../views/error404/'

function Routes() {
  return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route path="/players-setup">
            <PlayersSetup />  
          </Route> 
          <Route path="/scoreboard">
            <Scoreboard />  
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>

  )
}

export default Routes
