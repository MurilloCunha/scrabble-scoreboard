import { useState } from "react";
import useDictionary from "../../hooks/use-Dictionary";
import useNavigation from "../../hooks/use-navigation";
import { GameHook, wordData } from "../../interfaces";



function Scoreboard(game: GameHook) {
  const navigation = useNavigation()
  const dictionary = useDictionary<wordData[]>()
  const [teste, setTeste] = useState({jogador:0, score:0, palavra:''})

  const handleGameEnd = () => {
    game.endMatch()
    setTimeout(() => navigation.next(),3000)
  }
  
  return (
    <section>
      <h1>Placar</h1>
      {game.state.players.map(player => 
        <div key={player.id}>
          <h2>{player.name}</h2>
          <div>
            {player.score.map((score, index) => <p key={`${player}_score${index}`}>{score}</p>)}
          </div>
          <p>{player.totalScore}</p>
        </div>
      )}
      {<p>{JSON.stringify(game.state.stats,null, 2)}</p>}
      {game.state.players.find(player => player.name === game.state.stats.winner)?.totalScore}
      <div>
        <label>consulte o dicionário</label>
        <input type="text" onChange={(e) => setTeste({...teste, palavra: e.target.value})}/>
        <button onClick={() => dictionary.get(teste.palavra)} >consultar</button>
        {dictionary.isLoading && <p>Loading</p>}
        {!dictionary.isLoading && dictionary.response && dictionary.response.map(word => 
          <>
          <p>{teste.palavra}</p>
          <p>{word.class}</p>
          <ul>
            {word.meanings.map(meaning => <li>{meaning}</li>)}
          </ul>
          <p>{word.etymology}</p>
          </>
        )}
        {!dictionary.isLoading && dictionary.error && <p>{dictionary.error}</p>}
      </div>
      <button onClick={handleGameEnd}>Finalizar</button>
    </section>
  );
}

export default Scoreboard
