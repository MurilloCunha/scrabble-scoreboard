import { wordData } from '../../interfaces'

import './dictionary-answer.style.scss'

interface Props {
  answer: wordData
}

function DictionaryAnswer(props: Props) {
  const { answer } = props
  return (
  <div className="dictionary-answer">
    {answer.data.map(data => (
      <ul key={data.class}>
        <h3>{answer.word}</h3>
        <h4>{data.class}</h4>
        <ul>
          {data.meanings.map((meaning, index) => 
            <div key={`${index}_${answer.word}`}>
              <li>{meaning}</li>
              <span></span>
            </div>
          )}
        </ul>
      </ul>
    ))}
  </div>
  )
}

export default DictionaryAnswer
