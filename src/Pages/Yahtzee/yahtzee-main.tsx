import React from "react";
import "./../../App.css";
import "./yahtzee.css";
import GameScoreTotal from "../../Components/game-score-total";
import IconSelect from "../../Components/icon-select";
import BackButton from "../../Components/back-button";

const YahtzeeMain = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>YAHTZEE</h1>
      </div>
      <h3>Total Wins</h3>
      <div className="content-container">
        <GameScoreTotal game={"Yahtzee"} gamePath={"yahtzee"} />
        <IconSelect icon={"Yahtzee"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default YahtzeeMain;
