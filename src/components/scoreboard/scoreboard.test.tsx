import React from "react"
import { render, screen } from "@testing-library/react"

import Scoreboard from "./scoreboard"


describe("test scoreboard", () => {
	test("renders", () => {

		render(
			<Scoreboard 
				game={{
					state:{
						players:[
							{id:0,name:"test", higherScore:0, lowerScore:0,score:[0,1,2,3,4],totalScore:120},
							{id:1,name:"test", higherScore:0, lowerScore:0,score:[0,1,2,3,4],totalScore:120},
							{id:2,name:"test", higherScore:0, lowerScore:0,score:[0,1,2,3,4],totalScore:120},
						],
						stats:{
							gameDuration:0,
							higherScore:{player:"",score:0},
							lowerScore:{player:"",score:0},
							winner:""
						}},
					addPlayer: jest.fn(),
					addScore: jest.fn(),
					deleteScore: jest.fn(),
					startMatch: jest.fn(),
					endMatch: jest.fn(),
          
				}}
			/>)
		const scoreboardColumn = screen.getByTestId("scoreboard")
		expect(scoreboardColumn.children.length).toBe(3)

	})
})