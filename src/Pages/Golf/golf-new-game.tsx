import React, { useEffect, useState } from "react";
import "./../../App.css";
import "./golf.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";
import Scoreboard from "../../Components/scoreboard";

const GolfNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container-large">
        <h1>GOLF NEW GAME</h1>
      </div>
      <div className="content-container">
        <Scoreboard />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default GolfNewGame;
