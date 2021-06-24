import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../views/home/'
import PlayersSetup from '../views/players-setup/'
import Scoreboard from '../views/scoreboard/'
import Error404 from '../views/error404/'

function Routes() {
  const playersList = [{id:1,name:'name 1',score:[1,2,3]}, {id:2,name:'name 2',score:[4,5,6]}]
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />  
        </Route>
        <Route path="/players-setup">
          <PlayersSetup playersList={playersList} />  
        </Route> 
        <Route path="/scoreboard">
          <Scoreboard playersList={playersList} />  
        </Route>
        <Route>
          <Error404 />
        </Route>     
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
