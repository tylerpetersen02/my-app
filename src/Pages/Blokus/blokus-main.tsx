import React from "react";
import "./../../App.css";
import "./blokus.css";
import GameScoreTotal from "../../Components/game-score-total";
import IconSelect from "../../Components/icon-select";
import BackButton from "../../Components/back-button";

const BlokusMain = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>BLOKUS</h1>
      </div>
      <h3>Total Wins</h3>
      <div className="content-container">
        <GameScoreTotal game={"Blokus"} gamePath={"blokus"} />
        <IconSelect icon={"Blokus"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default BlokusMain;
