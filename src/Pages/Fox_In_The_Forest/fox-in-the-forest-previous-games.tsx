import React from "react";
import "./../../App.css";
import "./fox-in-the-forest.css";
import BackButton from "../../Components/back-button";

const FoxInTheForestPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container" style={{ marginBottom: "-30px" }}>
        <h1 style={{ fontSize: "2.8em", margin: "5px" }}>F.I.T.F</h1>
      </div>
      <h3 style={{ fontSize: "1.3em", margin: "-10px 0px" }}>Previous Games</h3>
      <div className="content-container"></div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default FoxInTheForestPreviousGames;
