
import React, { useState } from "react"
import Button from "../button/button"
import searchIcon from "./lupa.svg"
import "./search-input.style.scss"

interface Props {
  searchFunction: (word: string) => void,
}

function SearchInput(props: Props): JSX.Element {
	const { searchFunction } = props
	const [searchWord, setSearchWord] = useState("")

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const { currentTarget: { value } } = event
		setSearchWord(value)
	}

	const handleKeyDown = ( event: React.KeyboardEvent<HTMLInputElement>): void => {
		const { key } = event
		key === "Enter" && searchFunction(searchWord)
	}

	const handleClick = (): void => {
		searchWord !== "" && searchFunction(searchWord)
    
	}

	return (
		<div className="search-input" data-testid="search-input">
			<input type="search" onChange={handleChange} onKeyDown={handleKeyDown} value={searchWord} placeholder="Consulte o dicionário..." />
			<Button variant="transparent" onClick={handleClick}><img src={searchIcon} alt="search" /></Button>
		</div>
	)

}

export default SearchInput
