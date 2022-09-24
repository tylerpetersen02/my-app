import React from "react";
import "./../../App.css";
import "./blokus.css";
import BackButton from "../../Components/back-button";

const BlokusNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>BLOKUS NEW GAME</h1>
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default BlokusNewGame;
