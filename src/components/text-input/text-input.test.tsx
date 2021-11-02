import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import TextInput from "./text-input"

describe("test text-input", () => {
	test("renders with label", () => {
		render(<TextInput label='test-label' name='text-input'/>)

		const textInput = screen.getByLabelText("test-label")

		expect(textInput).toBeInTheDocument()
	})
	test("is acessible", () => {
		render(<TextInput label='test-label' name='text-input'/>)
  
		const textInput = screen.getByLabelText("test-label")

		fireEvent.change(textInput,{target:{value:"inputTest"}})

		expect(textInput).toHaveValue("inputTest")

	})

	const specialChars = ["@","#","$","%","¨","¬","&","*","(",")","-","_","+","=","§","}","{","º","[","]","ª","´","`","^","~","?","/","°",",","<",".",">",";",":"]
  
	test.each(specialChars)("verifiyng special char: %s", specialChar => {
		render(<TextInput label='test-label' name='text-input'/>)
		const textInput = screen.getByLabelText("test-label")

		fireEvent.change(textInput,{target:{value:specialChar}})

		expect(textInput).toHaveValue(specialChar)
    
		expect(textInput.nextElementSibling?.innerHTML).toMatch("somente letras e números")
	})
})