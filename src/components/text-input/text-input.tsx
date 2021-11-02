import React, { useState } from "react"
import "./text-input.style.scss"
import { INPUT_PATTERN } from "../../interfaces"
import { isPatternValid } from "../../utils/input-utils"

interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string,
  name: string,
  noSpecialChar?: boolean
  maxLength?: number
}

function TextInput(props: TextInputProps): JSX.Element {
	const { label, noSpecialChar = true, maxLength = 10, ...inputProps } = props
	const [state, setState] = useState({ error: false, isEmpty: true })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { validity, value } = event.currentTarget
		const isEmpty = !value ?? true

		isPatternValid(event.currentTarget,"somente letras e números.")
    
		setState({ error: validity.patternMismatch, isEmpty })
	}

	return (
		<div className="text-input__wrapper">
			<input
				className="text-input"
				id={label}
				pattern={noSpecialChar ? INPUT_PATTERN : ""}
				maxLength={maxLength}
				onChange={handleChange}
				{...inputProps}
			/>
			<label
				className="text-input__label"
				htmlFor={label}
				data-empty={state.isEmpty}
			>
				{state.error ? "somente letras e números" : label}
			</label>
		</div>
	)
}

export default TextInput
