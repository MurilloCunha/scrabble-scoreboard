import React from 'react'

function ScoreInput(props) {

    return (
    <div className="score-input">
        <input type="number" min={0} {...props}></input>
    </div>
    )
}

export default ScoreInput
