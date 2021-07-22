import React, { useCallback, useState } from 'react'

import SearchResult from '../search-result/'
import dictionaryService from '../../services/dictionary'

function SearchInput({resultHandler}) {
  const [inputValue, setInputValue] = useState('')

  const handleInput = useCallback((event)=>{
    const {value} = event.target
    setInputValue(value)
  },[])

  const handleSearch = useCallback(() => {
    dictionaryService.search(inputValue)
      .then(response => resultHandler(<SearchResult result={response}/>))
  }, [inputValue, resultHandler])
  
  return (
    <div className="search-input-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Consulte o dicionário"
        onChange={handleInput}
      />
      <button className="search-button" onClick={handleSearch}></button>
    </div>
  )
}

export default SearchInput
