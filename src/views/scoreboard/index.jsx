import React, { useContext } from 'react'

import Match from '../../context/status'
import Table from '../../components/table/'
import SearchInput from '../../components/search-input/'
import Button from '../../components/button/'

function Scoreboard() {
  const matchPlayers = useContext(Match)

  return (
    <section className='scoreboard'>
      <SearchInput />
      <Table playersList={matchPlayers.all} />
      <Button>Finalizar</Button>
    </section>

  )
}

export default Scoreboard
