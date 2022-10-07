import React from "react";
import "./../../App.css";
import "./chess.css";
import BackButton from "../../Components/back-button";

const ChessPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1 style={{ fontSize: "2.8em"}}>CHESS</h1>
      </div>
      <h3 style={{ fontSize: "1.3em", margin: "-10px 0px" }}>Previous Games</h3>
      <div className="content-container"></div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default ChessPreviousGames;
