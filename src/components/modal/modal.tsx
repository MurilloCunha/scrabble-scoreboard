import React, { useEffect, useState } from "react"
import useFocusTrap from "../../hooks/use-Focus-trap"
import Button from "../button/button"

import "./modal.style.scss"

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: JSX.Element | React.ReactNode
  show?: boolean
}

function Modal(props: Props): JSX.Element {
	const { children, show = false, ...divProps } = props
	const [visible, setVisible] = useState(show)
	const { trap } = useFocusTrap()
	const handleClick = () => {
		setVisible(!visible)
	}

	useEffect(() => {
		show === true ? setVisible(true) : setVisible(visible)
	}, [show, visible])

	return (
		<>
			{visible && <div className="modal__wrapper" {...divProps} aria-modal="true" onKeyDown={trap}>
				<div className="modal">
					<Button variant='transparent' onClick={handleClick}>X</Button>
					{children}
				</div>
			</div>}
		</>
	)
}

export default Modal
