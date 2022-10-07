import React from "react";
import "./../../App.css";
import "./blokus.css";
import BackButton from "../../Components/back-button";
import Scoreboard from "./../../Components/scoreboard";
import SubmitScores from "../../Components/submit-score-button";

const BlokusNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1 style={{ fontSize: "2.8em" }}>BLOKUS</h1>
      </div>
      <h3 style={{ fontSize: "1.3em", margin: "-10px 0px" }}>New Game</h3>
      <div className="content-container">
        <Scoreboard game={"blokus"} />
      </div>
      <div className="footer-new-game">
        <BackButton />
        <SubmitScores />
      </div>
    </div>
  );
};

export default BlokusNewGame;
