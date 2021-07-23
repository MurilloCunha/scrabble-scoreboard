import React,{ useState } from 'react'

import ScoreInput from '../score-input'

function ScoreEditMenu({edit,score, player}) {
  const [subMenu,setSubMenu] = useState(false)
  const [inputValue, setInputValue] = useState(0)
 
  const handleSubMenu = (evt) => {
    setSubMenu(!subMenu )
    evt.target.blur()
  }

  const handleScoreChange = (evt) => {
    const { value } = evt.target
    setInputValue(Number(value))
  }

  const handleEdit = (evt,player,action) => {
    const scoreList = player.score
    const selectedScore = Number(evt.target.parentNode.previousSibling.innerHTML)
    const selectedScoreIndex = scoreList.indexOf(selectedScore)
    edit(selectedScoreIndex,player,action,inputValue)
    setSubMenu(!subMenu)
    evt.target.blur()
  }
  return (
    <div className="score-edit-menu">
      <ScoreInput
        onChange={handleScoreChange}
        onFocus={handleSubMenu}
        readOnly={!subMenu}
        defaultValue={score}
      />
      {subMenu &&
        <div className="score-edit-menu__buttons">
          <button type="button" onClick={(evt) => handleEdit(evt,player,'remove')}>X</button>
          <button onClick={(evt) => handleEdit(evt,player,'edit')}>edit</button>
        </div>
      }
    </div>
  )
}

export default ScoreEditMenu
