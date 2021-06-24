import React from 'react'

const Button = (props) => {
    return (
        <button type="button" className={props.variant} {...props}>
            {props.children}
        </button>
    )
}

export default Button