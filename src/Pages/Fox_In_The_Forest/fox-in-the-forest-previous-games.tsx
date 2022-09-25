import React from "react";
import "./../../App.css";
import "./fox-in-the-forest.css";
import BackButton from "../../Components/back-button";

const FoxInTheForestPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>F.I.T.F</h1>
      </div>
      <h3>Previous Games</h3>
      <div className="content-container"></div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default FoxInTheForestPreviousGames;
