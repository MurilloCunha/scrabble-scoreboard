import { Player, GameStats, ScoreStats } from "../../interfaces"

export const scoreSum = 
  (score: number[], initialValue: number = 0): number => {
    return score.reduce((sum,value) => sum + value, initialValue)
  }

export const higherValue = (input: number[]): number => Math.max(...input)

export const lowerValue = (input: number[]): number => Math.min(...input)

export const scoreFilter = 
  (score: number[], scoreIndex: number, operator: 'equal' | 'different'): number[] => {
    return score.filter((score,index) => {
      if(operator === 'equal'){
        return index === scoreIndex
      }else if(operator === 'different'){
        return index !== scoreIndex
      }
      return []
    } )
  }
export const addPlayerToList = 
  (playersList: Player[], playerName: string): Player[] => {
    return [
      ...playersList,
      {
        id: playersList.length,
        name: playerName,
        score: [],
        totalScore: 0,
        higherScore: 0,
        lowerScore: 0
      }
    ]
  }

export const addScoreToPlayer = 
  (playersList: Player[], score: number, playerId: number): Player[] =>{
    return playersList.map(player => 
      player.id === playerId 
      ? {
        ...player,
        score: [...player.score, score],
        totalScore: scoreSum(player.score,score),
        higherScore: higherValue([...player.score, score]),
        lowerScore: lowerValue([...player.score, score]),
      }
      : player
    )
  } 

export const deleteScoreFromPlayer = 
  (playersList: Player[], scoreIndex: number, playerId: number): Player[] => {
    return playersList.map(player =>
      player.id === playerId 
      ?{
        ...player,
        score: scoreFilter(player.score,scoreIndex,"different"),
        totalScore: scoreSum(scoreFilter(player.score,scoreIndex,"different"))
      }
      : player)
  }


export const getWinnerName = 
  (playersList: Player[]): string => {
    return playersList.reduce((winner, player) => player.totalScore > winner.totalScore ? player : winner).name
  }

export const getMatchHigherScore = 
  (playersList: Player[]): ScoreStats => {
    const higherScorePlayer = playersList.reduce((previousPlayer, player) => player.higherScore > previousPlayer.higherScore ? player : previousPlayer)
    return {
      score: higherScorePlayer.higherScore,
      player:higherScorePlayer.name
    }
  }

export const getMatchLowerScore = 
  (playersList: Player[]): ScoreStats => {
    const lowerScorePlayer = playersList.reduce((previousPlayer, player) => player.lowerScore < previousPlayer.lowerScore ? player : previousPlayer)
    return {
      score: lowerScorePlayer.lowerScore,
      player:lowerScorePlayer.name
    }
  }

export const computeGameStats = 
  (playersList: Player[], stats: GameStats): GameStats => {
    return {
      winner: getWinnerName(playersList),
      higherScore: getMatchHigherScore(playersList),
      lowerScore: getMatchLowerScore(playersList),
      gameDuration: new Date().getTime() - stats.gameDuration

    }
  }