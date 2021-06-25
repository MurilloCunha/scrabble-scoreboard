import React, { useCallback, useContext, useState } from 'react'

import Match from '../../context/status'
import Table from '../../components/table/'
import SearchInput from '../../components/search-input/'
import Button from '../../components/button/'
import Modal from '../../components/modal/'

function Scoreboard() {
  const matchPlayers = useContext(Match)
  const [modal, setModal] = useState('')
  const [modalContent, setModalContent] = useState()

  const handleModal = useCallback((content) => {
    setModalContent(content)
    setModal(!modal)
  }, [modal])

  return (
    <section className='scoreboard'>
      <SearchInput resultHandler={handleModal}/>
      <Table playersList={matchPlayers.all} />
      <Button>Finalizar</Button>
      {modal && <Modal onClick={handleModal} >{modalContent}</Modal>}
    </section>

  )
}

export default Scoreboard
