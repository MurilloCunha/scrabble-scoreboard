import { handleStatus } from '../utils/promise-helpers'

const BASE_URL = `https://api.dictionaryapi.dev/api/v2/entries`

const handleError = (error) =>{
  console.log(error)
  switch (error) {
    case 404:
      return [{word:'Palavra não encontrada', meanings:[]}]  
    default:
      return [{word:'Não foi possível consultar o dicionário', meanings:[]}]
  }
}


const dictionaryService = {

  search(word,language='pt-BR'){
    return fetch(`${BASE_URL}/${language}/${word}`)
      .then(handleStatus)
      .catch(handleError)
  }
}

export default dictionaryService