
import { useState } from 'react'
import Button from '../button/button'
import searchIcon from './lupa.svg'
import './search-input.style.scss'

interface Props {
  searchFunction: (word: string) => void,
}

function SearchInput(props: Props) {
  const { searchFunction } = props
  const [searchWord, setSearchWord] = useState('')

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const { key, currentTarget:{ value } } = event
    if(key === 'Enter'){
      searchFunction(searchWord)
      return
    }
    setSearchWord(value)
    return
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if(searchWord !== ''){
      searchFunction(searchWord)
    }
  }

  return (
    <div className="search-input" data-testid="search-input">
      <input type="search" onKeyDown={handleKeyDown} placeholder="Consulte o dicionário..." />
      <Button variant="transparent" onClick={handleClick}><img src={searchIcon} alt="search" /></Button>
    </div>
  )

}

export default SearchInput
