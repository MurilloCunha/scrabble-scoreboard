import React from "react"
import { render, screen } from "@testing-library/react"

import ScoreList from "./score-list"


describe("test score-list", () => {
	test.each([0,1,2,3,4])("renders player scores", (score) => {

		render(
			<ScoreList 
				player={{id:0,name:"", higherScore:0, lowerScore:0,score:[0,1,2,3,4],totalScore:0}}
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
					addPlayer: jest.fn(),
					addScore: jest.fn(),
					deleteScore: jest.fn(),
					startMatch: jest.fn(),
					endMatch: jest.fn(),
          
				}}
			/>)
		const scoreList = screen.getByRole("list")

		expect(scoreList.children[score].innerHTML).toBe(`${score}`)
	})
})