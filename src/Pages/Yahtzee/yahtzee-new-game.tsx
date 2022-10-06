import React from "react";
import "./../../App.css";
import "./yahtzee.css";
import BackButton from "../../Components/back-button";
import YahtzeeScoreboard from "../../Components/yahtzee-scoreboard";
import SubmitScores from "../../Components/submit-score-button";

const YahtzeeNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1 style={{ fontSize: "2.8em"}}>YAHTZEE</h1>
      </div>
      <h3 style={{ fontSize: "1.3em", margin: "-10px 0px" }}>New Game</h3>
      <div className="content-container">
        <YahtzeeScoreboard game={"yahtzee"} />
      </div>
      <div className="footer-new-game">
        <BackButton />
        <SubmitScores />
      </div>
    </div>
  );
};

export default YahtzeeNewGame;
