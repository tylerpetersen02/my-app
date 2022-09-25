import React from "react";
import "./../../App.css";
import "./chess.css";
import GameScoreTotal from "../../Components/game-score-total";
import IconSelect from "../../Components/icon-select";
import BackButton from "../../Components/back-button";

const ChessMain = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>CHESS</h1>
      </div>
      <h3>Total Wins</h3>
      <div className="content-container">
        <GameScoreTotal game={"Chess"} gamePath={"chess"} />
        <IconSelect icon={"Chess"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default ChessMain;
