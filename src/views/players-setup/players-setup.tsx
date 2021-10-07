import UseNavigation from "../../hooks/use-navigation";

function PlayersSteup() {
  const navigation = UseNavigation()
  return (
    <>
      <button onClick={() => navigation.previous()}>previous</button>
      <button onClick={() => navigation.next()}>next</button>
    </>
  );
}

export default PlayersSteup
