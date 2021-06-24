import React, { useContext } from 'react'

import Match from '../../context/status'
import Table from '../../components/table/'
import SearchInput from '../../components/search-input/'

function Scoreboard() {
  const matchPlayers = useContext(Match)

  return (
    <section className='scoreboard'>
      <Table playersList={matchPlayers.all} />
      <SearchInput />
    </section>

  )
}

export default Scoreboard
