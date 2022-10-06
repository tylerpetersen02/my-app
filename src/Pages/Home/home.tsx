import "./home.css";
import { Link } from "react-router-dom";
import MainButton from "./../../Components/main-button";

const Home = () => {
  return (
    <div className="App-container">
      <div className="title-container-large">
        <h1 className="glow">
          GAME <br></br> NIGHT
        </h1>
      </div>
      <div className="content-container-main">
        <Link className="main-button-link" to="/golf">
          <MainButton buttonText={"Golf"} buttonBorder={"yellow"} />
        </Link>
        <Link className="main-button-link" to="/blokus">
          <MainButton buttonText={"Blokus"} buttonBorder={"yellow"} />
        </Link>
        <Link className="main-button-link" to="/patchwork">
          <MainButton buttonText={"Patchwork"} buttonBorder={"yellow"} />
        </Link>
        <Link className="main-button-link" to="/hive">
          <MainButton buttonText={"Hive"} buttonBorder={"yellow"} />
        </Link>
        <Link className="main-button-link" to="/fox-in-the-forest">
          <MainButton
            buttonText={"Fox In The Forest"}
            buttonBorder={"yellow"}
          />
        </Link>
        <Link className="main-button-link" to="/chess">
          <MainButton buttonText={"Chess"} buttonBorder={"yellow"} />
        </Link>
        <Link className="main-button-link" to="/yahtzee">
          <MainButton buttonText={"Yahtzee"} buttonBorder={"yellow"} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
