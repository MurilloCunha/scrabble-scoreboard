import './scrabble-tile.style.css'

interface ScrableTileProps {
  word?: string
}

function ScrabbleTile({ word = "scoreboard" }: ScrableTileProps) {
  return (
    <h1 className="scrabble-tile">
      {word.split('').map(letter => 
        <span>{letter.toUpperCase()}</span>
      )}
    </h1>
  )
}

export default ScrabbleTile
