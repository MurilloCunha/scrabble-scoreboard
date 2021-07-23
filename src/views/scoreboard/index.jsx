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
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState()
  const [address, setAddress] = useState()
  const [round, setRound] = useState(0)
  const [update, setUpdate] = useState(false)

  const handleModal = useCallback((content) => {
    setModalContent(content)
    setModal(!modal)
    address === '/scrabble-scoreboard/' && matchPlayers.restore()
  }, [address, matchPlayers, modal])

  const handleEndGame = useCallback(()=>{
    matchTimer.setEndTime()
    setAddress('/scrabble-scoreboard/')
    setModalContent(<GameStats />)
    setModal(!modal)
  },[ matchTimer, modal])

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

  const handleEdit = useCallback((scoreIndex,player,action,value) =>{

    const selectedPlayer = matchPlayers.player(player) 
    action === 'remove' && selectedPlayer.removeScore(scoreIndex)
    action === 'edit' && selectedPlayer.editScore(scoreIndex,value)
    setUpdate(!update)
  },[matchPlayers, update])

  return (
    <main className='scoreboard'>
      <SearchInput resultHandler={handleModal}/>
      <InfoContainer>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          {matchPlayers.all.map(player => 
            <PlayerScore 
              player={player}
              onScoreChange={handleScoreChange}
              round={round}
              edit={handleEdit}
              />
          )}
        </div>
      </InfoContainer>
      <Button onClick={handleEndGame}>Finalizar</Button>
      {modal && <Modal onClick={handleModal} to={address}>{modalContent}</Modal>}
    </main>
  )
}

export default Scoreboard
