import UseNavigation from "../../hooks/use-navigation";

const Home = () => {
  const navigation = UseNavigation()
  return (
    <>
      <button onClick={() => navigation.previous()}>previous</button>
      <button onClick={() => navigation.next()}>next</button>
    </>
  );
}

export default Home;
