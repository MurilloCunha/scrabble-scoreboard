import React from 'react'

function ScoreInput(props) {

    return (
    <input className="score-input" type="number" min={0} {...props} defaultValue={0}></input>
    )
}

export default ScoreInput
