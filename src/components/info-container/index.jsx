import React from 'react'

function InfoContainer(props) {
    return (
        <article className="info-container">
            {props.children}
        </article>
    )
}

export default InfoContainer
