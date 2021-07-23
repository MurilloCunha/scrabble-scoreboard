export const lettersOnly = (string) => {
  return string.match(/[0-9 !@#$%&*+-/{}[\]()?]/g) ? false : true 
}

export const exceedLength = (string) => {
  return string.length > 10 ? true : false
}

export const isValidNameInput = (string) => {
  if(string === ""){
    return('o nome não pode estar vazio.')
  }
  if(!lettersOnly(string)){
    return('o nome só pode conter letras.')
  }
  if(exceedLength(string)){
    return('o nome deve conter no máximo 10 letras.')
  }

  return undefined
}