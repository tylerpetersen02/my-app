import React from "react";
import "./../../App.css";
import "./yahtzee.css";
import BackButton from "../../Components/back-button";

const YahtzeePreviousGames = () => {
  return (
    <div className="App-container">
      <div className="title-container">
        <h1>YAHTZEE</h1>
      </div>
      <h3>Previous Games</h3>
      <div className="content-container"></div>
      <div className="footer">
        <BackButton />
      </div>
    </div>
  );
};

export default YahtzeePreviousGames;
