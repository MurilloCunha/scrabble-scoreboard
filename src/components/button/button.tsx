import React from 'react'
interface ButtonProps {
    children: string
}
const Button = (props: ButtonProps) => {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}

export default Button