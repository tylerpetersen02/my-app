import React from "react";
import "./../../App.css";
import "./chess.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";

const ChessPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>CHESS ARCHIVES</h1>
      </div>
      <div className="content-container">
        <IconSelect icon={"Chess"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default ChessPreviousGames;
