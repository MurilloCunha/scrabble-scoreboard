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

export interface wordData {
  word: string,
  data:{
    class: string,
    meanings: string[],
    etymology: string
  }[]
}

export interface DictionaryHook{
  response: JSX.Element | null,
  error: {error: string, message: string} | null,
  isLoading: boolean,
  get: (str: string) => void

}

export interface trapHook {
  trap: (event: React.KeyboardEvent<HTMLDivElement>) => void
}

export interface navigationHook {
  next: () => void,
  previous: () => void,
  home: () => void,
}

export interface GameHook {
  state: GameState,
  addPlayer: (playerName: string) => void,
  addScore: (id: number, score: number) => void,
  deleteScore: (id: number, scoreIndex: number) => void,
  startMatch: () => void,
  endMatch: () => void,

}

export type StyleVariants = "primary" | "secondary" | "ghost" | "inactive" | "delete" | "transparent"

export const INPUT_PATTERN ="^[a-zA-Z0-9]*$"
