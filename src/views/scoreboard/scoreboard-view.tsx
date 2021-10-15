import Button from "../../components/button/button";
import Scoreboard from "../../components/scoreboard/scoreboard";
import SearchInput from "../../components/search-input/search-input";
import useDictionary from "../../hooks/use-Dictionary";
import useNavigation from "../../hooks/use-navigation";
import { GameHook, wordData } from "../../interfaces";



function ScoreboardView(game: GameHook) {
  const dictionary = useDictionary<wordData[]>()
  const navigation = useNavigation()


  const handleGameEnd = () => {
    game.endMatch()
    setTimeout(() => navigation.next(),3000)
  }
  
  return (
    <>
      <header>
        <h1>Placar</h1>
      </header>
      <SearchInput searchFunction={dictionary.get}/>
      <Scoreboard game={game} />
      {dictionary.isLoading && <p>Loading</p>}
      {!dictionary.isLoading && dictionary.response &&
        <p>{JSON.stringify(dictionary.response,null,2)}</p>
      }
  {!dictionary.isLoading && dictionary.error && <p>{dictionary.error}</p>}
      <Button variant="primary" onClick={handleGameEnd}>Finalizar</Button>
    </>
  );
}

export default ScoreboardView
