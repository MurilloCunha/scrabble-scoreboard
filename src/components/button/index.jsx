import React from 'react'

const Button = (props) => {
    return (
        <button className={`button ${props.variant}  ${props.className}`} {...props} onSubmit={props.onSubmit}>
            {props.children}
        </button>
    )
}

export default Button