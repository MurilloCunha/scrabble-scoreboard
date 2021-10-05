import React, { useCallback, useState } from 'react'

import SearchResult from '../search-result'
import dictionaryService from '../../services/dictionary'
import Button from '../button/button'

function SearchInput({resultHandler}: any) {
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
    <section className="search-input-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Consulte o dicionário"
        onChange={handleInput}
        onBlurCapture={handleSearch}
      />
      <Button>+</Button>
    </section>
  )
}

export default SearchInput
