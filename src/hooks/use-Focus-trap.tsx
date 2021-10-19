import React from "react"

function UseFocusTrap() {

  const trap = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key, shiftKey, currentTarget } = event
    const { activeElement } = document
    if (key !== 'Tab') return
    console.log(activeElement)
    const focusableModalElements = currentTarget.querySelectorAll('a[href], button:not([disabled]), textarea, input, select')
    console.log(focusableModalElements)

    const firstElement = focusableModalElements[0] as HTMLElement
    const lastElement = focusableModalElements[focusableModalElements.length - 1] as HTMLElement

    if (!shiftKey && activeElement === lastElement) {
      firstElement.focus()
      return event.preventDefault()
    }

    if (shiftKey && activeElement === firstElement) {
      lastElement.focus()
      return event.preventDefault()
        }
  }

  return { trap }
}

export default UseFocusTrap
