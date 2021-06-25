import { createContext } from 'react'
import { playersList } from '../models/playersList/'

const matchPlayers = new playersList()

const Match = createContext(matchPlayers)

export default Match