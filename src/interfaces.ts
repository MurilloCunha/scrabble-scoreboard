export interface GameState {
  players: Player[],
  stats: GameStats
}
export interface GameStats {
  winner: string,
  higherScore: ScoreStats,
  lowerScore: ScoreStats,
  gameDuration: number
}
export interface ScoreStats {
  score: number,
  player: string,
}
export interface Player {
  id: number,
  name: string,
  score: number[],
  totalScore: number,
  higherScore: number,
  lowerScore: number
}
export interface WordSearch {
  result: {
    word: string,
    meanings: {
      partOfSpeech: string,
      definitions: {
        definition: string
      }[]
    }[]
  }[],
}

