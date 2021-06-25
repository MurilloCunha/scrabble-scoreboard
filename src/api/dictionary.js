export const dictionaryAPI = (word) => {
  return new Promise((resolve,reject)=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/pt-BR/${word}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      return [{word:"Palavra não encontrada", meanings:[]}]
    })
    .then(jsonResponse => resolve(jsonResponse))
    .catch(error => {throw new Error(error)})
  })

}