import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MetaTags from 'react-meta-tags'

import Home from '../views/home/'
import PlayersSetup from '../views/players-setup/'
import Scoreboard from '../views/scoreboard/'
import Error404 from '../views/error404/'

function Routes() {
  return (
      <BrowserRouter>
        <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,300;1,400&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <title>Scrabble Scoreboard</title>
        </MetaTags>
        <Switch>
          <Route exact path="/scrabble-scoreboard/">
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
