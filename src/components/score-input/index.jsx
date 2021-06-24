import React from 'react'

function ScoreInput({id}) {
    return (
    <div class="score-input">
        <input type="number" min={0} data-playerID={id}></input>
    </div>
    )
}

export default ScoreInput
