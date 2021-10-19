import React from "react"

import "./card.style.scss"

interface Props {
  children: React.ReactNode | JSX.Element
}

function Card(props: Props): JSX.Element {
	const {children} = props

	return (
		<div className="card">
			{children}
		</div>
	)
}

export default Card
