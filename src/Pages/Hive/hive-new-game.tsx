import React from "react";
import "./../../App.css";
import "./hive.css";
import BackButton from "../../Components/back-button";
import Scoreboard from "../../Components/scoreboard";
import SubmitScores from "../../Components/submit-score-button";

const HiveNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>HIVE</h1>
      </div>
      <h3>New Game</h3>
      <div className="content-container">
        <Scoreboard game={"hive"} />
      </div>
      <div className="footer-new-game">
        <BackButton />
        <SubmitScores />
      </div>
    </div>
  );
};

export default HiveNewGame;
