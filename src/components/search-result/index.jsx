import React from 'react'

function SearchResult({result}) {
    return (
      < >
        {result.map(search =>
          <div className="search-result">
            <h2>{search.word}</h2>
            {search.meanings.map(meaning => (
              <div>
                <h3>{meaning.partOfSpeech}</h3>
                <ol>
                  {meaning.definitions.map(definition => <li>{definition.definition}</li>)}
                </ol>
              </div>
            ))}
          </div>
        )}
      </>
    )
}

export default SearchResult
