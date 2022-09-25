import React from "react";
import "./../../App.css";
import "./patchwork.css";
import GameScoreTotal from "../../Components/game-score-total";
import IconSelect from "../../Components/icon-select";
import BackButton from "../../Components/back-button";

const PatchworkMain = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>PATCHWORK</h1>
      </div>
      <h3>Total Wins</h3>
      <div className="content-container">
        <GameScoreTotal game={"Patchwork"} gamePath={"patchwork"} />
        <IconSelect icon={"Patchwork"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default PatchworkMain;
