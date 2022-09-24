import "./home.css";
import { Link } from "react-router-dom";
import MainButton from "./../../Components/main-button";

const Home = () => {
  return (
    <div className="App-container">
      <div className="title-container-large">
        <h1>
          GAME <br></br> NIGHT!
        </h1>
      </div>
      <div className="content-container">
        <Link className="main-button-link" to="/golf">
          <MainButton buttonText={"Golf"} />
        </Link>
        <Link className="main-button-link" to="/blokus">
          <MainButton buttonText={"Blokus"} />
        </Link>
        <Link className="main-button-link" to="/patchwork">
          <MainButton buttonText={"Patchwork"} />
        </Link>
        <Link className="main-button-link" to="/hive">
          <MainButton buttonText={"Hive"} />
        </Link>
        <Link className="main-button-link" to="/fox-in-the-forest">
          <MainButton buttonText={"Fox In The Forest"} />
        </Link>
        <Link className="main-button-link" to="/chess">
          <MainButton buttonText={"Chess"} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
