import React from "react"
import { fireEvent, render, screen,describe,test,expect,jest } from "@testing-library/react"
import SearchInput from "./search-input"

describe("search-input test", () => {
	test("renders", () => {
		const fn = (str) => {console.log(str)}
		render(<SearchInput searchFunction={fn}/>)

		const searchInput = screen.getByTestId("search-input")
		const img = screen.getByAltText("search")

		expect(searchInput).toBeInTheDocument()
		expect(img).toBeInTheDocument()
		expect(searchInput.childNodes[0].outerHTML).toContain("<input")
		expect(searchInput.childNodes[1].outerHTML).toContain("<button")
	})

	test("calls functions when Enter pressed",() => {
		const fn = jest.fn()
		render(<SearchInput searchFunction={fn}/>)

		const searchInput = screen.getByTestId("search-input")

		fireEvent.keyDown(searchInput.childNodes[0],{target:{ value:"test"}})
    
		fireEvent.keyDown(searchInput.childNodes[0],{key:"Enter", code:"Enter"})

		expect(fn).toBeCalledTimes(1)
	})
})