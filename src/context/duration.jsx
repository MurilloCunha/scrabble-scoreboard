import { createContext } from 'react'
import { gameDuration } from '../models/game-duration'

const matchTime = new gameDuration() 

const MatchDuration = createContext(matchTime)

export default MatchDuration