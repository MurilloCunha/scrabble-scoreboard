import React from "react"
import { render, screen } from "@testing-library/react"
import NumberInput from "./number-input"

describe("test score-input", () => {
	test("renders", () => {
		render(<NumberInput name='score-input' data-testid="score-input"/>)

		const scoreInput = screen.getByTestId("score-input")

		expect(scoreInput).toBeInTheDocument()
	})
})