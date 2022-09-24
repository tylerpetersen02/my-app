import React from "react";
import "./../../App.css";
import "./chess.css";
import BackButton from "../../Components/back-button";

const ChessNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>CHESS NEW GAME</h1>
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default ChessNewGame;
