import React from 'react'

const Button = (props) => {
    return (
        <button className={props.variant} {...props} onSubmit={props.onSubmit}>
            {props.children}
        </button>
    )
}

export default Button