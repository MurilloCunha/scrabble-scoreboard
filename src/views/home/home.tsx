import useNavigation from "../../hooks/use-navigation";

const Home = () => {
  const navigation = useNavigation()
  return (
    <>
      <h1>Scrabble Scoreboard</h1>
      <p> Marcador de pontos para acompanhar o jogo de tabuleiro Scrabble</p>
      <button onClick={() => navigation.next()}>Nova partida</button>
    </>
  );
}

export default Home;
