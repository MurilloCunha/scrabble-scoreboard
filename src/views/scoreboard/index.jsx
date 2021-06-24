import React from 'react'

import Match from '../../context/status'
import Table from '../../components/table/'
import SearchInput from '../../components/search-input/'

function Scoreboard() {
  return (
    <Match.Consumer>
      {(matchPlayers) => (
        <section className='scoreboard'>
          <Table playersList={matchPlayers.all} />
          <SearchInput />
        </section>
      )}
    </Match.Consumer>
  )
}

export default Scoreboard
