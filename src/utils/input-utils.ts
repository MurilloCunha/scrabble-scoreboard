export const isPatternValid = (input: HTMLInputElement,invalidMessage: string): void => {
  input.validity.patternMismatch 
  ? input.setCustomValidity(invalidMessage)
  : input.setCustomValidity('')
}