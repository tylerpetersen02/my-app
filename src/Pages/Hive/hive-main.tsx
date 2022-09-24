import React from "react";
import "./../../App.css";
import "./hive.css";
import GameScoreTotal from "../../Components/game-score-total";
import IconSelect from "../../Components/icon-select";
import BackButton from "../../Components/back-button";

const HiveMain = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>HIVE</h1>
      </div>
      <div className="content-container">
        <GameScoreTotal game={"Hive"} gamePath={"hive"} />
        <IconSelect icon={"Hive"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default HiveMain;
