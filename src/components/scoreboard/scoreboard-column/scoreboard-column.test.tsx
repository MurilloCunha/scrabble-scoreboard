import React from "react"
import { render, screen } from "@testing-library/react"

import ScoreboardColumn from "./scoreboard-column"


describe("test scoreboard column", () => {
	test("renders", () => {

		render(
			<ScoreboardColumn 
				player={{id:0,name:"test", higherScore:0, lowerScore:0,score:[0,1,2,3,4],totalScore:120}}
				game={{
					state:{
						players:[],
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
		const scoreboardColumn = screen.getByTestId("column")
		expect(scoreboardColumn.children[0].innerHTML).toBe("test")
		expect(scoreboardColumn.children[1].outerHTML).toContain("<ul class=\"score-list\">")
		expect(scoreboardColumn.children[2].outerHTML).toContain("<input")
		expect(scoreboardColumn.children[3].innerHTML).toBe("120")

	})
})