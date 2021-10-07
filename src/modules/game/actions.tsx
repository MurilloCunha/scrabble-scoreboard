export type ACTIONS =
  | { type: 'ADD_PLAYER', name: string }
  | { type: 'ADD_SCORE', id: number, score: number }
  | { type: 'DELETE_SCORE', id: number, scoreIndex: number }
  | { type: 'START_MATCH' }
  | { type: 'END_MATCH' }
