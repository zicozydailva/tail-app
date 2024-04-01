import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Player from "./components/Player";
import Projects from "./components/Projects";
import { useGlobalContext } from "./context/userContext";

function App() {
  const { isLoading } = useGlobalContext();
  console.log(isLoading);

  if (isLoading) {
    return (
      <section className="page page-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <div className="p-5">
      <section>
        <Cart />
        <span className="m-10"></span>

        <Player />
        <span className="m-10"></span>

        <Projects />
        <span className="m-10"></span>
        {/* <Card /> */}
      </section>
    </div>
  );
}

export default App;
