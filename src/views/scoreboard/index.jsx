import React, { useCallback, useContext, useState } from 'react'

import Match from '../../context/status'
import MatchDuration from '../../context/duration'
import SearchInput from '../../components/search-input/'
import Button from '../../components/button/'
import Modal from '../../components/modal/'
import GameStats from '../../components/game-stats'
import InfoContainer from '../../components/info-container'
import PlayerScore from '../../components/player-score'

function Scoreboard() {
  const matchPlayers = useContext(Match)
  const matchTimer = useContext(MatchDuration)
  const [modal, setModal] = useState('')
  const [modalContent, setModalContent] = useState()
  const [address, setAddress] = useState()
  const [round, setRound] = useState(0)

  const handleModal = useCallback((content) => {
    setModalContent(content)
    setModal(!modal)
    address === '/' && matchPlayers.restore()
  }, [address, matchPlayers, modal])

  const handleEndGame = useCallback(()=>{
    matchTimer.setEndTime()
    setAddress('/scrabble-scoreboard/')
    setModalContent(<GameStats />)
    setModal(!modal)
    matchPlayers.restore()
  },[matchPlayers, matchTimer, modal])

  const handleScoreChange = useCallback((event,player) => {
    let { value } = event.target

    if(event.key !== 'Enter'){
      return
    }
    player.addScore(Number(value))
  
    setRound(round+1)
    event.target.blur();
    event.target.value = ''

  }, [round])
  return (
    <main className='scoreboard'>
      <SearchInput resultHandler={handleModal}/>
      <InfoContainer>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          {matchPlayers.all.map(player => <PlayerScore player={player} onScoreChange={handleScoreChange} round={round}/>)}
        </div>
      </InfoContainer>
      <Button onClick={handleEndGame}>Finalizar</Button>
      {modal && <Modal onClick={handleModal} to={address}>{modalContent}</Modal>}
    </main>
  )
}

export default Scoreboard
