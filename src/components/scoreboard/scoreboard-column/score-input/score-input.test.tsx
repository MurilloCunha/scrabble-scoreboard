import React from "react"
import { render, screen } from "@testing-library/react"

import Scoreinput from "./score-input"


describe("test score-input HOC", () => {
	test("renders number-input properly", () => {

		render(
			<Scoreinput 
				player={{id:0,name:"", higherScore:0, lowerScore:0,score:[0],totalScore:0}}
				game={{
					state:{
						players:[
							{id:0,name:"", higherScore:0, lowerScore:0,score:[0],totalScore:0}
						],
						stats:{
							gameDuration:0,
							higherScore:{player:"",score:0},
							lowerScore:{player:"",score:0},
							winner:""
						}},
					addPlayer: () => {},
					addScore: () => {},
					deleteScore: () => {},
					startMatch: () => {},
					endMatch: () => {},
          
				}}
			/>)
		const input = screen.getByTestId("score-input-hoc")

		expect(input).toBeInTheDocument()
	})
})