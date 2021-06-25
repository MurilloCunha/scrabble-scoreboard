import React, { useCallback, useContext, useState } from 'react'

import Match from '../../context/status'
import MatchDuration from '../../context/duration'
import Table from '../../components/table/'
import SearchInput from '../../components/search-input/'
import Button from '../../components/button/'
import Modal from '../../components/modal/'
import GameStats from '../../components/game-stats'

function Scoreboard() {
  const matchPlayers = useContext(Match)
  const matchTimer = useContext(MatchDuration)
  const [modal, setModal] = useState('')
  const [modalContent, setModalContent] = useState()

  const handleModal = useCallback((content) => {
    setModalContent(content)
    setModal(!modal)
  }, [modal])

  const handleEndGame = useCallback(()=>{
    matchTimer.setEndTime()
    setModalContent(<GameStats />)
    setModal(!modal)
  },[matchTimer, modal])

  return (
    <section className='scoreboard'>
      <SearchInput resultHandler={handleModal}/>
      <Table playersList={matchPlayers.all} />
      <Button onClick={handleEndGame}>Finalizar</Button>
      {modal && <Modal onClick={handleModal} >{modalContent}</Modal>}
    </section>
  )
}

export default Scoreboard
