import React, { useEffect, useState } from "react";
import "./../../App.css";
import "./golf.css";
import BackButton from "../../Components/back-button";
import Scoreboard from "../../Components/scoreboard";
import SubmitScores from "../../Components/submit-score-button";

const GolfNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>GOLF</h1>
      </div>
      <h3>New Game</h3>
      <div className="content-container">
        <Scoreboard game={"golf"} />
      </div>
      <div className="footer-new-game">
        <BackButton />
        <SubmitScores />
      </div>
    </div>
  );
};

export default GolfNewGame;
