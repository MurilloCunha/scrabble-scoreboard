import Button from "../../components/button/button";
import Card from "../../components/card/card";
import useNavigation from "../../hooks/use-navigation";

const Home = () => {
  const navigation = useNavigation()

  const handleNewGame = () =>{
    navigation.next()
  }

  return (
    <>
      <header>
        <h1>Scrabble Scoreboard</h1>
      </header>
      <main>
        <Card>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" fill="#ffd808" height="70" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"/><path d="M19,5h-2V3H7v2H5C3.9,5,3,5.9,3,7v1c0,2.55,1.92,4.63,4.39,4.94c0.63,1.5,1.98,2.63,3.61,2.96V19H7v2h10v-2h-4v-3.1 c1.63-0.33,2.98-1.46,3.61-2.96C19.08,12.63,21,10.55,21,8V7C21,5.9,20.1,5,19,5z M5,8V7h2v3.82C5.84,10.4,5,9.3,5,8z M12,14 c-1.65,0-3-1.35-3-3V5h6v6C15,12.65,13.65,14,12,14z M19,8c0,1.3-0.84,2.4-2,2.82V7h2V8z"/></svg>
          <div>
          <h4>Marque o placar dos seus jogos!</h4>
          <p>descubre quem venceu em apensa 1 clique.</p>
          </div>
        </Card>
        <Card>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" fill="#ffd808" height="60" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/><g><path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"/><path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"/><path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"/></g></g></g></svg>
          <div>
          <h4>Consulte o dicionário!</h4>
          <p>conteste as palavras dos seus adversãrios.</p>
          </div>
        </Card>
        <Button variant="primary" onClick={handleNewGame}>Nova partida</Button>
      </main>
      <footer></footer>
    </>
  );
}

export default Home;
