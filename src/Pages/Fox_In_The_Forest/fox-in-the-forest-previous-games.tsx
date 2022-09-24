import React from "react";
import "./../../App.css";
import "./fox-in-the-forest.css";
import BackButton from "../../Components/back-button";
import IconSelect from "../../Components/icon-select";

const FoxInTheForestPreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>F.I.T.F ARCHIVES</h1>
      </div>
      <div className="content-container">
        <IconSelect icon={"Fox In The Forest"} size={"large"} />
      </div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default FoxInTheForestPreviousGames;
