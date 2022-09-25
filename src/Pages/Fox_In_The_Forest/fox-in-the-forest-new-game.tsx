import React from "react";
import "./../../App.css";
import "./fox-in-the-forest.css";
import BackButton from "../../Components/back-button";
import Scoreboard from "../../Components/scoreboard";
import SubmitScores from "../../Components/submit-score-button";

const FoxInTheForestNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>F.I.T.F</h1>
      </div>
      <h3>New Game</h3>
      <div className="content-container">
        <Scoreboard game={"fox in the forest"} />
      </div>
      <div className="footer-new-game">
        <BackButton />
        <SubmitScores />
      </div>
    </div>
  );
};

export default FoxInTheForestNewGame;
