import React from "react";
import "./../../App.css";
import "./golf.css";
import BackButton from "../../Components/back-button";

const GolfNewGame = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>GOLF NEW GAME</h1>
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default GolfNewGame;
