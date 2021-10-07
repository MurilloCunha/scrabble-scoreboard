import UseNavigation from "../../hooks/use-navigation";

function Scoreboard() {
  const navigation = UseNavigation()
  return (
    <>
      <button onClick={() => navigation.previous()}>previous</button>
      <button onClick={() => navigation.next()}>next</button>
    </>
  );
}

export default Scoreboard
