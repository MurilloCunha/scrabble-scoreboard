import React from 'react'
import './number-input.style.scss'

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
 }

function NumberInput(props: Props) {
  const { ...inputProps } = props
  return (
    <>
      <input className="number-input" type="number" {...inputProps} maxLength={3} placeholder='0' min={0}/>
    </>
  )
}

export default NumberInput
