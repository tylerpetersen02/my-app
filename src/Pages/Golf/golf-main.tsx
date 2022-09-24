import GameScoreTotal from "../../Components/game-score-total";
import IconSelect from "../../Components/icon-select";
import BackButton from "./../../Components/back-button";
import "./../../App.css";
import "./golf.css";

const GolfMain = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>GOLF</h1>
      </div>
      <div className="content-container">
        <GameScoreTotal game={"Golf"} gamePath={"golf"} />
        <IconSelect icon={"Golf"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default GolfMain;
