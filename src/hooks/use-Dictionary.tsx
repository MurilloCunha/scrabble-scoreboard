import { useState } from 'react'
import DictionaryAnswer from '../components/dictionary-answer/dictionary-answer'

const BASE_URL = `https://significado.herokuapp.com/meanings`

interface error {
  error: string,
  message: string
}

function useDictionary() {
  const [response, setResponse] = useState<JSX.Element | null>(null)
  const [error, setError] = useState<error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const get = (word:string) => {
    setIsLoading(true)
    setResponse(null)
    setError(null)
    fetch(`${BASE_URL}/${word}`)
      .then(res =>
        res.ok ? res.json() : Promise.reject(res.status)
      )
      .then(jsonRes => {
        setResponse(<DictionaryAnswer answer={{word, data: jsonRes}} />)
        setIsLoading(false)
      })
      .catch(error => {
        setError({error: error , message:'Não foi possível consultar o dicionário'})
        setIsLoading(false)
      })
  }
  return {response, error, isLoading, get}
}

export default useDictionary
