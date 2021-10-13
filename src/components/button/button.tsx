import React from 'react'
import { StyleVariants } from '../../interfaces'
import './button.style.scss'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: StyleVariants
}

const Button = (props: ButtonProps) => {
    const { variant = "primary", ...buttonProps } = props
    return (
        <button className="button" data-variant={variant} {...buttonProps}>
            {props.children}
        </button>
    )
}

export default Button