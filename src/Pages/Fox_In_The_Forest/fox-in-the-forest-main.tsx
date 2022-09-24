import React from "react";
import "./../../App.css";
import "./fox-in-the-forest.css";
import GameScoreTotal from "../../Components/game-score-total";
import IconSelect from "../../Components/icon-select";
import BackButton from "../../Components/back-button";

const FoxInTheForestMain = () => {
  return (
    <div className="App-container">
      <div className="title-container-large">
        <h1>FOX IN THE FOREST</h1>
      </div>
      <div className="content-container">
        <GameScoreTotal
          game={"Fox In The Forest"}
          gamePath={"fox-in-the-forest"}
        />
        <IconSelect icon={"Fox In The Forest"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default FoxInTheForestMain;
