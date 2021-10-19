import Button from "../../components/button/button";
import Modal from "../../components/modal/modal";
import Scoreboard from "../../components/scoreboard/scoreboard";
import SearchInput from "../../components/search-input/search-input";
import useDictionary from "../../hooks/use-Dictionary";
import useNavigation from "../../hooks/use-navigation";
import { GameHook } from "../../interfaces";

function ScoreboardView(game: GameHook) {
  const dictionary = useDictionary()
  const navigation = useNavigation()


  const handleGameEnd = () => {
    game.endMatch()
    navigation.next()
  }
  
  return (
    <>
      <header>
        <h1>Placar</h1>
      </header>
      <main>
        <SearchInput searchFunction={dictionary.get} />
        <Modal show={dictionary.isLoading}>
          {dictionary.isLoading && <p>Loading</p>}
          {!dictionary.isLoading && !!dictionary.response && dictionary.response}
          <p>{dictionary.error?.message}</p>
        </Modal>
        <Scoreboard game={game} />
        <Button variant="primary" onClick={handleGameEnd}>Finalizar</Button>
      </main>
      <footer></footer>
    </>
  );
}

export default ScoreboardView
